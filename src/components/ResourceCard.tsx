import React, { useState } from 'react';
import type { Resource } from '../data/resources';
import styles from './ResourceCard.module.css';
import { 
  Bookmark, 
  ExternalLink, 
  Share2, 
  Star, 
  Check,
  Info
} from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onTagClick: (tag: string) => void;
  onOpenDetails: (resource: Resource) => void;
  viewMode: 'grid' | 'list';
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  isBookmarked,
  onToggleBookmark,
  onTagClick,
  onOpenDetails,
  viewMode
}) => {
  const [copied, setCopied] = useState(false);

  // Copy link handler
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(resource.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const getDomain = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  const isListView = viewMode === 'list';

  return (
    <div className={`
      ${styles.card} 
      ${isListView ? styles.listCard : styles.gridCard} 
      glass-panel
    `}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img 
            src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(resource.url)}`} 
            alt=""
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
            className={styles.favicon}
          />
          <span className={styles.fallbackLetter}>
            {resource.title.charAt(0).toUpperCase()}
          </span>
        </div>

        <div className={styles.titleArea}>
          <div className={styles.titleLine}>
            <h3 className={styles.title} title={resource.title}>{resource.title}</h3>
            {resource.isHot && (
              <span className={styles.hotBadge}>HOT</span>
            )}
          </div>
          <span className={styles.domain}>{getDomain(resource.url)}</span>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.ratingBadge}>
            <Star size={11} fill="currentColor" />
            <span>{resource.rating.toFixed(1)}</span>
          </div>
          <button
            onClick={() => onToggleBookmark(resource.id)}
            className={`${styles.iconBtn} ${isBookmarked ? styles.activeBookmark : ''}`}
            title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
            aria-label="Toggle Bookmark"
          >
            <Bookmark size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Footer Section (Tags + Details + Share + Visit Buttons) */}
      <div className={styles.footer}>
        <div className={styles.tagsRow}>
          {resource.tags.slice(0, 2).map(tag => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={styles.tag}
            >
              #{tag.toLowerCase()}
            </button>
          ))}
        </div>

        <div className={styles.btnRow}>
          {/* Details Modal Trigger */}
          <button
            onClick={() => onOpenDetails(resource)}
            className={styles.detailsBtn}
            title="View Use Cases, Features & Free Tier Details"
          >
            <Info size={12} />
            <span>Details</span>
          </button>

          {/* Copy Share Trigger */}
          <button
            onClick={handleShare}
            className={`${styles.iconBtn} ${copied ? styles.copiedBtn : ''}`}
            title="Copy Link"
            aria-label="Share Link"
          >
            {copied ? <Check size={13} /> : <Share2 size={13} />}
          </button>

          {/* External Link */}
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
            title={`Visit ${resource.title}`}
          >
            <span>Visit</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
