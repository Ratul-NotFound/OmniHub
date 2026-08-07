import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ResourceCard } from './components/ResourceCard';
import { SubmitModal } from './components/SubmitModal';
import { ResourceDetailModal } from './components/ResourceDetailModal';
import { RESOURCES, AI_SUBCATEGORIES, FREE_SUBCATEGORIES, LIBRARY_SUBCATEGORIES, REPO_SUBCATEGORIES, AUTOMATION_SUBCATEGORIES } from './data/resources';
import type { Resource } from './data/resources';
import styles from './App.module.css';

export default function App() {
  // Theme state: default to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  // Sidebar states
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // Search & Filtering states
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Handle main category transitions
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory('all'); // Reset subcategory search filters
  };

  // Modal suggestions state
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [selectedResourceDetails, setSelectedResourceDetails] = useState<Resource | null>(null);

  // Bookmarks state (ids stored in localStorage)
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Resources state (default list + custom suggestions from localStorage)
  const [resources, setResources] = useState<Resource[]>(() => {
    try {
      const savedCustom = localStorage.getItem('custom_resources');
      const customItems: Resource[] = savedCustom ? JSON.parse(savedCustom) : [];
      return [...customItems, ...RESOURCES];
    } catch {
      return RESOURCES;
    }
  });

  // Sync theme attribute to <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Handle bookmark toggling
  const handleToggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  // Handle suggestion additions
  const handleSubmitSuccess = (newResource: {
    title: string;
    url: string;
    category: any;
    tags: string[];
    description: string;
  }) => {
    const formattedResource: Resource = {
      id: `custom_${Date.now()}`,
      title: newResource.title,
      description: newResource.description,
      url: newResource.url,
      category: newResource.category,
      tags: newResource.tags,
      rating: 5.0, // Submissions get a friendly 5-star starting rating
      isHot: true
    };

    const updated = [formattedResource, ...resources];
    setResources(updated);

    // Save custom resources locally
    const savedCustom = localStorage.getItem('custom_resources');
    const customItems: Resource[] = savedCustom ? JSON.parse(savedCustom) : [];
    localStorage.setItem('custom_resources', JSON.stringify([formattedResource, ...customItems]));
  };

  // Direct tag clicking helper
  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    // Focus search input or just trigger search
  };

  // Subcategories mapping for categories
  const getSubcategoriesForCategory = () => {
    if (activeCategory === 'ai') return AI_SUBCATEGORIES;
    if (activeCategory === 'free') return FREE_SUBCATEGORIES;
    if (activeCategory === 'libraries') return LIBRARY_SUBCATEGORIES;
    if (activeCategory === 'repos') return REPO_SUBCATEGORIES;
    if (activeCategory === 'automation') return AUTOMATION_SUBCATEGORIES;
    if (activeCategory === 'all') {
      return [
        { id: 'all', name: 'All Resources' },
        { id: 'uicomponents', name: 'Copy-Paste UI Components' },
        { id: 'freeassets', name: 'Free UI Assets & Fonts' },
        { id: 'styling', name: 'CSS & Motion' },
        { id: 'freeresearch', name: 'AI & Research Labs' },
        { id: 'coding', name: 'AI Coding Tools' },
        { id: 'llm', name: 'LLMs & Chat' },
        { id: 'llmapi', name: 'Free AI & LLM APIs' },
        { id: 'appbuilder', name: 'Prompt to App/Web' },
        { id: 'awesome', name: 'Awesome Lists & Guides' },
        { id: 'ai_ml', name: 'AI & ML Repos' },
        { id: 'selfhosted', name: 'Self-Hosted Tools' },
        { id: 'fullstack', name: 'Full-Stack Boilerplates' },
        { id: 'nocode_workflow', name: 'No-Code Workflows' },
        { id: 'ai_agents', name: 'AI Agents & Orchestration' },
        { id: 'browser_scraping', name: 'Browser Scraping & Automation' },
        { id: 'devops_ci', name: 'DevOps & CI/CD' },
        { id: 'database', name: 'Free Databases' },
        { id: 'hosting', name: 'Free Hosting & Cloud' },
        { id: 'domains', name: 'Free Domains & SSL' },
        { id: 'freecms', name: 'Free Headless CMS' },
        { id: 'freestorage', name: 'Free Storage & CDN' },
        { id: 'frontend', name: 'Frontend Frameworks' },
        { id: 'backend', name: 'Backend & Server' },
        { id: 'stateapi', name: 'State & Data Fetching' },
        { id: 'dev_tools', name: 'CLI & Productivity' },
        { id: 'uiux', name: 'Design Tools' },
        { id: 'devhubs', name: 'Communities & News' },
        { id: 'docs', name: 'Docs & Guides' }
      ];
    }
    if (activeCategory === 'libraries') {
      return [
        { id: 'all', name: 'All Libraries' },
        { id: 'freeassets', name: 'UI & Animation Libraries' },
        { id: 'frameworks', name: 'Web Frameworks' }
      ];
    }
    if (activeCategory === 'design') {
      return [
        { id: 'all', name: 'All Design' },
        { id: 'freeassets', name: 'Icons & Vector Assets' },
        { id: 'uiux', name: 'Design Tools' }
      ];
    }
    if (activeCategory === 'websites') {
      return [
        { id: 'all', name: 'All Dev Hubs' },
        { id: 'devhubs', name: 'Communities & News' }
      ];
    }
    if (activeCategory === 'learning') {
      return [
        { id: 'all', name: 'All Learning' },
        { id: 'docs', name: 'Docs & Guides' }
      ];
    }
    if (activeCategory === 'utilities') {
      return [
        { id: 'all', name: 'All Utilities' },
        { id: 'freedev', name: 'Dev Tools & Utilities' }
      ];
    }
    return [];
  };

  // Filter resources based on Category, Bookmarks, and Search query
  const filteredResources = resources.filter(res => {
    // 1. Bookmarks Filter
    if (showBookmarksOnly && !bookmarks.includes(res.id)) {
      return false;
    }

    // 2. Category Filter
    if (!showBookmarksOnly && activeCategory !== 'all' && res.category !== activeCategory) {
      return false;
    }

    // 3. Subcategory Filter (supports primary & multi-subcategory matching across all categories)
    if (!showBookmarksOnly && activeSubcategory !== 'all') {
      const matchesPrimary = res.subcategory === activeSubcategory;
      const matchesMulti = res.subcategories && res.subcategories.includes(activeSubcategory);
      if (!matchesPrimary && !matchesMulti) {
        return false;
      }
    }

    // 3. Search query filter (matches title, description, tags, url)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchDesc = res.description.toLowerCase().includes(q);
      const matchTags = res.tags.some(tag => tag.toLowerCase().includes(q));
      const matchUrl = res.url.toLowerCase().includes(q);

      return matchTitle || matchDesc || matchTags || matchUrl;
    }

    return true;
  });

  return (
    <div className={styles.appLayout}>
      {/* Sidebar */}
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        bookmarksCount={bookmarks.length}
        showBookmarksOnly={showBookmarksOnly}
        setShowBookmarksOnly={setShowBookmarksOnly}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isOpenMobile={isOpenMobile}
        setIsOpenMobile={setIsOpenMobile}
        totalCount={resources.length}
      />

      {/* Main Container */}
      <div className={styles.mainContainer}>
        {/* Header */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          theme={theme}
          setTheme={setTheme}
          activeCategory={activeCategory}
          showBookmarksOnly={showBookmarksOnly}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onOpenSubmitModal={() => setIsSubmitOpen(true)}
          onOpenMobileMenu={() => setIsOpenMobile(true)}
          resultsCount={filteredResources.length}
        />

        {/* Content Body */}
        <main className={styles.content}>
          {/* Dynamic Subcategory Navigation Bar (Always visible for all categories) */}
          {!showBookmarksOnly && getSubcategoriesForCategory().length > 0 && (
            <div className={styles.subCategoryBar}>
              {getSubcategoriesForCategory().map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={`${styles.subCategoryBtn} ${activeSubcategory === sub.id ? styles.activeSubCategoryBtn : ''}`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          {filteredResources.length > 0 ? (
            <div className={`
              ${styles.resourceGrid} 
              ${viewMode === 'list' ? styles.listLayout : styles.gridLayout}
            `}>
              {filteredResources.map(res => (
                <ResourceCard
                  key={res.id}
                  resource={res}
                  isBookmarked={bookmarks.includes(res.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onTagClick={handleTagClick}
                  onOpenDetails={(resource) => setSelectedResourceDetails(resource)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>🔍</div>
              <h3>No resources found</h3>
              <p>Try refining your search query or choosing another category.</p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className={styles.resetSearchBtn}
                >
                  Clear Search Filter
                </button>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Submit Resource Modal Overlay */}
      <SubmitModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        onSubmitSuccess={handleSubmitSuccess}
      />

      {/* Rich Resource Details Modal Overlay */}
      <ResourceDetailModal
        resource={selectedResourceDetails}
        isOpen={!!selectedResourceDetails}
        onClose={() => setSelectedResourceDetails(null)}
        onTagClick={handleTagClick}
      />
    </div>
  );
}
