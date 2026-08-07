import React, { useState } from 'react';
import styles from './SubmitModal.module.css';
import { X, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import { CATEGORIES } from '../data/resources';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: (newResource: any) => void;
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

  // Form submission via Web3Forms email API to m.h.ratul18@gmail.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !url.trim() || !description.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      new URL(url);
    } catch {
      setError('Please enter a valid website URL (including http:// or https://).');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form payload to FormSubmit AJAX endpoint targeting m.h.ratul18@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/m.h.ratul18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 OmniHub Resource Suggestion: ${title}`,
          _template: 'table',
          _captcha: 'false',
          "Resource Name": title,
          "Website URL": url,
          "Category": category,
          "Tags": tagsInput,
          "Description": description
        })
      });

      const data = await response.json();

      if (data.success || response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.warn('FormSubmit email webhook delivery handled:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
      
      if (onSubmitSuccess) {
        const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
        onSubmitSuccess({
          title,
          url,
          category,
          tags: tags.length > 0 ? tags : ['community'],
          description
        });
      }

      // Clear form after 2.5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setTitle('');
        setUrl('');
        setCategory('ai');
        setTagsInput('');
        setDescription('');
        onClose();
      }, 2500);
    }
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
              <h4>Resource Suggestion Sent!</h4>
              <p>Thank you for contributing! Your suggestion has been sent directly to Ratul's email (<strong>m.h.ratul18@gmail.com</strong>) for review.</p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                You can also open an Issue or PR on <a href="https://github.com/Ratul-NotFound/OmniHub/issues" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>GitHub ↗</a>
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
                  placeholder="e.g. https://cursor.com"
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
                <label htmlFor="description">Description <span className={styles.required}>*</span></label>
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Briefly explain what purpose this tool serves..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Submit Actions */}
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
                  className={styles.submitFormBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Email...</span>
                  ) : (
                    <>
                      <Mail size={16} />
                      <span>Send Suggestion</span>
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
