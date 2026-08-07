import React, { useState } from 'react';
import type { Resource } from '../data/resources';
import styles from './ResourceDetailModal.module.css';
import { 
  X, 
  ExternalLink, 
  Share2, 
  Star, 
  Flame, 
  Check, 
  Zap, 
  Gift, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

interface ResourceDetailModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  onTagClick: (tag: string) => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({
  resource,
  isOpen,
  onClose,
  onTagClick
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !resource) return null;

  const handleShare = async () => {
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

  // Generate fallback use cases if not explicitly provided
  const useCases = resource.useCases || [
    `Building modern web applications and AI-driven experiences with ${resource.title}.`,
    `Rapid prototyping, testing, and production deployment using ${getDomain(resource.url)}.`,
    `Enhancing developer productivity and workflow automation.`
  ];

  // Generate fallback features if not explicitly provided
  const features = resource.features || [
    `High-performance, scalable cloud infrastructure and APIs.`,
    `Seamless integration with modern JavaScript/TypeScript tech stacks.`,
    `Comprehensive documentation, SDK support, and active developer community.`
  ];

  // Generate fallback free tier details if not explicitly provided
  const freeTierDetails = resource.freeTierDetails || 
    `Includes a generous free tier for developers, prototyping, and open-source projects without upfront credit card requirements.`;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div 
        className={`${styles.modal} glass-panel`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={styles.header}>
          <div className={styles.brandGroup}>
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

            <div className={styles.titleInfo}>
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{resource.title}</h2>
                {resource.isHot && (
                  <span className={styles.hotBadge}>
                    <Flame size={11} fill="currentColor" /> HOT
                  </span>
                )}
              </div>
              <span className={styles.domain}>{getDomain(resource.url)}</span>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.ratingBadge}>
              <Star size={12} fill="currentColor" />
              <span>{resource.rating.toFixed(1)}</span>
            </div>
            <button 
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close Details Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className={styles.body}>
          {/* Main Description */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Zap size={15} /> Overview & Purpose
            </h3>
            <p className={styles.description}>{resource.description}</p>
          </div>

          {/* Free Tier Offers Box */}
          <div className={styles.freeTierBox}>
            <div className={styles.freeTierHeader}>
              <Gift size={16} className={styles.giftIcon} />
              <h4>What the Free Plan Offers</h4>
            </div>
            <p>{freeTierDetails}</p>
          </div>

          {/* Use Cases Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <CheckCircle2 size={15} /> Primary Use Cases & Purpose
            </h3>
            <ul className={styles.featureList}>
              {useCases.map((item, index) => (
                <li key={index}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Layers size={15} /> Key Features & Capabilities
            </h3>
            <ul className={styles.featureList}>
              {features.map((item, index) => (
                <li key={index}>
                  <span className={styles.bulletDot}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags List */}
          <div className={styles.section}>
            <h4 className={styles.tagsTitle}>Tags & Categories</h4>
            <div className={styles.tagsContainer}>
              {resource.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    onTagClick(tag);
                    onClose();
                  }}
                  className={styles.tag}
                >
                  #{tag.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className={styles.footer}>
          <button
            onClick={handleShare}
            className={`${styles.shareBtn} glass-panel`}
          >
            {copied ? <Check size={16} /> : <Share2 size={16} />}
            <span>{copied ? 'Link Copied!' : 'Share Link'}</span>
          </button>

          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
          >
            <span>Visit Official Site</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
