import React, { useState } from 'react';
import styles from './SubmitModal.module.css';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../data/resources';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newResource: {
    title: string;
    url: string;
    category: any;
    tags: string[];
    description: string;
  }) => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('ai');
  const [tagsInput, setTagsInput] = useState('');
  const [description, setDescription] = useState('');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Form submission handler with Email Webhook to m.h.ratul18@gmail.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !url.trim() || !description.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // URL basic regex test
    try {
      new URL(url);
    } catch {
      setError('Please enter a valid website URL (including http:// or https://).');
      return;
    }

    setIsSubmitting(true);

    const tags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const payload = {
      title,
      url,
      category,
      tags: tags.length > 0 ? tags : ['custom'],
      description,
      adminEmail: 'm.h.ratul18@gmail.com',
      _subject: `[OmniHub Suggestion] ${title}`
    };

    try {
      // Send email payload via Formspree / Webhook to m.h.ratul18@gmail.com
      await fetch('https://formspree.io/f/mqaevepk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(err => {
        console.log('Webhook dispatched locally:', err);
      });
    } catch (err) {
      console.log('Webhook dispatched:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger success hook to append to local database list & admin queue
    onSubmitSuccess({
      title,
      url,
      category,
      tags: tags.length > 0 ? tags : ['custom'],
      description
    });

    // Clear fields after delay
    setTimeout(() => {
      setIsSuccess(false);
      setTitle('');
      setUrl('');
      setCategory('ai');
      setTagsInput('');
      setDescription('');
      onClose();
    }, 2500);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.modal} glass-panel`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <Sparkles size={18} className={styles.sparkleIcon} />
            <h3>Suggest a Resource</h3>
          </div>
          <button 
            onClick={onClose} 
            className={styles.closeBtn}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className={styles.body}>
          {isSuccess ? (
            <div className={styles.successScreen}>
              <CheckCircle2 size={56} className={styles.successIcon} />
              <h4>Resource Submitted for Review!</h4>
              <p>Thank you for contributing! Your resource suggestion has been submitted to the Admin Moderation Queue. Once approved, it will be published live on OmniHub.</p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Want instant approval? <a href="https://github.com/Ratul-NotFound/OmniHub/issues" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>Open an Issue on GitHub ↗</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.errorBanner}>{error}</div>}

              {/* Title Input */}
              <div className={styles.formGroup}>
                <label htmlFor="title">Resource Name <span className={styles.required}>*</span></label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. Cursor Editor"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* URL Input */}
              <div className={styles.formGroup}>
                <label htmlFor="url">Website URL <span className={styles.required}>*</span></label>
                <input
                  id="url"
                  type="url"
                  placeholder="e.g. https://cursor.sh"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Category selector */}
              <div className={styles.formGroup}>
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={isSubmitting}
                >
                  {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags input */}
              <div className={styles.formGroup}>
                <label htmlFor="tags">Tags <span className={styles.helperText}>(comma separated)</span></label>
                <input
                  id="tags"
                  type="text"
                  placeholder="e.g. AI Coding, IDE, Productive"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              {/* Description Input */}
              <div className={styles.formGroup}>
                <label htmlFor="desc">Short Description <span className={styles.required}>*</span></label>
                <textarea
                  id="desc"
                  rows={3}
                  placeholder="What is this website and who is it for?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Actions Footer */}
              <div className={styles.footer}>
                <button 
                  type="button" 
                  onClick={onClose} 
                  className={styles.cancelBtn}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Suggestion
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
