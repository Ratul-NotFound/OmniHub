import React from 'react';
import { CATEGORIES } from '../data/resources';
import styles from './Sidebar.module.css';
import {
  LayoutDashboard,
  Sparkles,
  Gift,
  Globe,
  Blocks,
  Palette,
  BookOpen,
  Wrench,
  GitBranch,
  Workflow,
  Bookmark,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  bookmarksCount: number;
  showBookmarksOnly: boolean;
  setShowBookmarksOnly: (show: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
  totalCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  setActiveCategory,
  bookmarksCount,
  showBookmarksOnly,
  setShowBookmarksOnly,
  isCollapsed,
  setIsCollapsed,
  isOpenMobile,
  setIsOpenMobile,
  totalCount
}) => {
  const getIcon = (name: string, className?: string) => {
    const props = { className, size: 20 };
    switch (name) {
      case 'LayoutDashboard': return <LayoutDashboard {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Gift': return <Gift {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Blocks': return <Blocks {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      default: return <LayoutDashboard {...props} />;
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setShowBookmarksOnly(false);
    setActiveCategory(categoryId);
    setIsOpenMobile(false); // Close mobile drawer
  };

  const handleBookmarkToggle = () => {
    setShowBookmarksOnly(!showBookmarksOnly);
    setIsOpenMobile(false); // Close mobile drawer
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className={styles.mobileBackdrop} 
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      <aside className={`
        ${styles.sidebar} 
        ${isCollapsed ? styles.collapsed : ''} 
        ${isOpenMobile ? styles.mobileOpen : ''}
        glass-panel
      `}>
        {/* Toggle Collapse Desktop Button */}
        <button 
          className={`${styles.collapseBtn} glass-panel`}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Brand/Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <span className={styles.logoGradientIcon}>O</span>
          </div>
          {!isCollapsed && (
            <div className={styles.logoText}>
              <h1 className="glow-text">OmniHub</h1>
              <span className={styles.logoSub}>Universal Hub</span>
            </div>
          )}
        </div>

        {/* Navigation Categories */}
        <nav className={styles.navSection}>
          <div className={styles.sectionLabel}>
            {!isCollapsed ? 'Categories' : 'CAT'}
          </div>
          <ul className={styles.navList}>
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id && !showBookmarksOnly;
              return (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                    title={category.name}
                  >
                    <span className={styles.navIcon}>
                      {getIcon(category.iconName, isActive ? styles.activeIcon : undefined)}
                    </span>
                    {!isCollapsed && <span className={styles.navLabel}>{category.name}</span>}
                  </button>
                </li>
              );
            })}

            {/* Bookmarks navigation filter */}
            <li className={styles.navSeparator} />
            
            <li>
              <button
                onClick={handleBookmarkToggle}
                className={`${styles.navItem} ${showBookmarksOnly ? styles.navItemActive : ''} ${styles.bookmarkItem}`}
                title="My Bookmarks"
              >
                <span className={styles.navIcon}>
                  <Bookmark 
                    size={20} 
                    className={showBookmarksOnly ? styles.activeIcon : ''} 
                    fill={showBookmarksOnly || bookmarksCount > 0 ? 'currentColor' : 'none'}
                  />
                </span>
                {!isCollapsed && (
                  <>
                    <span className={styles.navLabel}>My Bookmarks</span>
                    {bookmarksCount > 0 && (
                      <span className={styles.badge}>{bookmarksCount}</span>
                    )}
                  </>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer Details/Stats */}
        <div className={styles.footerSection}>
          {!isCollapsed ? (
            <div className={styles.statsPanel}>
              <div className={styles.statRow}>
                <span>Total Items</span>
                <strong>{totalCount}</strong>
              </div>
              <div className={styles.statRow}>
                <span>Source</span>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.gitLink}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Open Source
                </a>
              </div>
            </div>
          ) : (
            <div className={styles.collapsedFooterIcon} title="GitHub Open Source">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
