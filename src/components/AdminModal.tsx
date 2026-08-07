import React from 'react';
import type { Resource } from '../data/resources';
import styles from './AdminModal.module.css';
import { X, Check, Trash2, ExternalLink, ShieldCheck, Inbox } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingResources: Resource[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  pendingResources,
  onApprove,
  onReject
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.modal} glass-panel`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <ShieldCheck size={20} className={styles.adminIcon} />
            <div>
              <h3 className={styles.title}>Admin Moderation Queue</h3>
              <span className={styles.subtitle}>Review user-suggested sites before publishing live</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className={styles.closeBtn}
            aria-label="Close Admin Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {pendingResources.length > 0 ? (
            <div className={styles.queueList}>
              {pendingResources.map((item) => (
                <div key={item.id} className={styles.queueCard}>
                  <div className={styles.cardMain}>
                    <div className={styles.cardHeader}>
                      <h4 className={styles.cardTitle}>{item.title}</h4>
                      <span className={styles.categoryBadge}>{item.category}</span>
                    </div>

                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.cardUrl}
                    >
                      <span>{item.url}</span>
                      <ExternalLink size={12} />
                    </a>

                    <p className={styles.cardDesc}>{item.description}</p>

                    <div className={styles.tagsRow}>
                      {item.tags.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.actionButtons}>
                    <button
                      onClick={() => onApprove(item.id)}
                      className={styles.approveBtn}
                      title="Approve and Publish to OmniHub"
                    >
                      <Check size={16} />
                      <span>Approve</span>
                    </button>

                    <button
                      onClick={() => onReject(item.id)}
                      className={styles.rejectBtn}
                      title="Reject Submission"
                    >
                      <Trash2 size={16} />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Inbox size={48} className={styles.emptyIcon} />
              <h4>No Pending Submissions</h4>
              <p>All user-submitted suggestions have been reviewed and moderated!</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.queueCount}>
            {pendingResources.length} {pendingResources.length === 1 ? 'submission' : 'submissions'} pending review
          </span>
          <button onClick={onClose} className={styles.doneBtn}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
