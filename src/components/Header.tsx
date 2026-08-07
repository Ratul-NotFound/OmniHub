import React, { useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { 
  Search, 
  Sun, 
  Moon, 
  Plus, 
  Menu, 
  Grid, 
  List, 
  X,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/resources';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  activeCategory: string;
  showBookmarksOnly: boolean;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  onOpenSubmitModal: () => void;
  onOpenMobileMenu: () => void;
  resultsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  theme,
  setTheme,
  activeCategory,
  showBookmarksOnly,
  viewMode,
  setViewMode,
  onOpenSubmitModal,
  onOpenMobileMenu,
  resultsCount
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  // Shortcut key listener for '/' and 'Ctrl+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isSearchFocused = document.activeElement === searchInputRef.current;
      
      // Ctrl + K or slash (/) when not typing in any input
      if (
        (e.ctrlKey && e.key === 'k') || 
        (e.key === '/' && !isSearchFocused && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }

      // Escape to blur search
      if (e.key === 'Escape' && isSearchFocused) {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Determine Title & Description based on state
  const getCategoryDetails = () => {
    if (showBookmarksOnly) {
      return {
        title: 'Bookmarked Resources',
        description: 'Your personally curated collection of saved links and tools.'
      };
    }
    const cat = CATEGORIES.find(c => c.id === activeCategory);
    return {
      title: cat?.name || 'All Resources',
      description: cat?.description || 'Curated directory of developer resources.'
    };
  };

  const { title, description } = getCategoryDetails();

  return (
    <header className={styles.header}>
      {/* Top Bar (Search, Controls) */}
      <div className={styles.topBar}>
        {/* Mobile menu toggle */}
        <button 
          className={`${styles.mobileMenuBtn} glass-panel`}
          onClick={onOpenMobileMenu}
          aria-label="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        {/* Brand Label for Mobile */}
        <div className={styles.mobileLogo}>
          <span className={styles.mobileLogoIcon}>O</span>
          <span className={styles.mobileLogoText}>OmniHub</span>
        </div>

        {/* Search Wrapper */}
        <div className={`${styles.searchWrapper} glass-panel`}>
          <Search size={18} className={styles.searchIcon} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search resources, tags, URLs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery ? (
            <button 
              className={styles.clearBtn} 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          ) : (
            <kbd className={styles.shortcut}>/</kbd>
          )}
        </div>

        {/* Actions (Layout, Theme, Submit) */}
        <div className={styles.actions}>
          {/* Layout Toggle */}
          <div className={`${styles.layoutToggle} glass-panel`}>
            <button
              className={`${styles.layoutBtn} ${viewMode === 'grid' ? styles.activeLayout : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
            <button
              className={`${styles.layoutBtn} ${viewMode === 'list' ? styles.activeLayout : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`${styles.themeToggle} glass-panel`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className={styles.sunIcon} />
            ) : (
              <Moon size={20} className={styles.moonIcon} />
            )}
          </button>

          {/* Submit Suggestion */}
          <button 
            className={`${styles.submitBtn} glass-panel`}
            onClick={onOpenSubmitModal}
          >
            <Plus size={18} />
            <span className={styles.submitText}>Add Resource</span>
          </button>
        </div>
      </div>

      {/* Header Info Panel (Page title, descriptions) */}
      <div className={styles.infoBar}>
        <div className={styles.titleContainer}>
          <h2 className={styles.categoryTitle}>
            {title}
            {activeCategory === 'ai' && !showBookmarksOnly && (
              <Sparkles size={18} className={styles.titleDecoration} />
            )}
          </h2>
          <p className={styles.categoryDesc}>{description}</p>
        </div>
        <div className={styles.resultsBadge}>
          <span>{resultsCount} {resultsCount === 1 ? 'resource' : 'resources'}</span>
        </div>
      </div>
    </header>
  );
};
