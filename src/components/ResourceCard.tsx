import React, { useState } from 'react';
import type { Resource } from '../data/resources';
import styles from './ResourceCard.module.css';
import { 
  Bookmark, 
  ExternalLink, 
  Share2, 
  Star, 
  Flame, 
  Check 
} from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onTagClick: (tag: string) => void;
  viewMode: 'grid' | 'list';
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  isBookmarked,
  onToggleBookmark,
  onTagClick,
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
      glass-panel glass-panel-hover
    `}>
      {/* Background glow effects for grid view */}
      {!isListView && <div className={styles.glowBg} />}

      {/* Main Content Area */}
      <div className={styles.content}>
        <div className={styles.header}>
          {/* Favicon or fallback domain indicator */}
          <div className={styles.avatar}>
            <img 
              src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(resource.url)}`} 
              alt=""
              onError={(e) => {
                // If it fails to load, replace with clean placeholder
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              className={styles.favicon}
            />
            <span className={styles.fallbackLetter}>
              {resource.title.charAt(0).toUpperCase()}
            </span>
          </div>

          <div className={styles.titleInfo}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{resource.title}</h3>
              {resource.isHot && (
                <span className={styles.hotBadge} title="Trending Resource">
                  <Flame size={12} fill="currentColor" /> HOT
                </span>
              )}
            </div>
            
            {/* Domain text */}
            <span className={styles.domain}>{getDomain(resource.url)}</span>
          </div>

          {/* Rating */}
          <div className={styles.ratingBadge}>
            <Star size={12} className={styles.starIcon} fill="currentColor" />
            <span>{resource.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>{resource.description}</p>

        {/* Tags */}
        <div className={styles.tagsContainer}>
          {resource.tags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={styles.tag}
            >
              #{tag.toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Actions (Share, Bookmark, Launch) */}
      <div className={styles.actions}>
        {/* Bookmark Trigger */}
        <button
          onClick={() => onToggleBookmark(resource.id)}
          className={`${styles.actionBtn} ${isBookmarked ? styles.activeBookmark : ''}`}
          title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark resource'}
        >
          <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>

        {/* Share/Copy Trigger */}
        <button
          onClick={handleShare}
          className={`${styles.actionBtn} ${copied ? styles.copiedBtn : ''}`}
          title="Copy Link to Clipboard"
          aria-label="Share resource"
        >
          {copied ? <Check size={18} className={styles.checkIcon} /> : <Share2 size={18} />}
          {copied && <span className={styles.copiedTooltip}>Copied!</span>}
        </button>

        {/* Launch External Link */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitBtn}
          title={`Visit ${resource.title}`}
        >
          <span className={styles.visitText}>Visit Site</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
};
