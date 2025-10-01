import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DocumentationSidebar } from '@/components/DocumentationSidebar';
import { SearchBar } from '@/components/SearchBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileMenu } from '@/components/MobileMenu';
import { MobileSearchModal } from '@/components/MobileSearchModal';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { LanguageCodeExamples } from '@/components/LanguageCodeExamples';
import { DocumentationNavigation } from '@/components/DocumentationNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { cn } from '@/lib/utils';
import documentationContent from '@/data/documentation';
import referenceDocumentation from '@/data/reference-docs';
import migrationDocumentation from '@/data/migration-docs';
import { gettingLanguagesExamples } from '@/data/getting-languages-examples';
import { translateExamples } from '@/data/translate-examples';
import { translateHtmlExamples } from '@/data/translate-html-examples';
import { detectLanguagesExamples } from '@/data/detect-languages-examples';
import { postLanguagesExamples } from '@/data/post-languages-examples';
import { getLanguagesExamples } from '@/data/get-languages-examples';

const allDocumentation = {
  ...documentationContent,
  ...referenceDocumentation,
  ...migrationDocumentation
};

const Index = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname === '/' ? '/what-is-lingvanex' : location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentContent = allDocumentation[currentPath] || allDocumentation['/what-is-lingvanex'];

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 w-64 h-screen bg-sidebar border-r border-sidebar-border z-20">
        <DocumentationSidebar 
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64">
        {/* Header - Mobile Optimized */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          {/* Top row - Logo and actions */}
          <div className="flex items-center justify-between px-4 py-3 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <MobileMenu
                isOpen={isMobileMenuOpen}
                onToggle={toggleMobileMenu}
                currentPath={currentPath}
                onNavigate={handleNavigate}
              />
              <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">
                Lingvanex Translator API
              </h1>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="hidden sm:block">
                <SearchBar onNavigate={handleNavigate} className="w-64" />
              </div>
              <div className="sm:hidden">
                <MobileSearchModal onNavigate={handleNavigate} />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-8">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <MarkdownRenderer content={currentContent} />
              {currentPath === '/getting-languages' && (
                <LanguageCodeExamples examples={gettingLanguagesExamples} />
              )}
              {currentPath === '/translate' && (
                <LanguageCodeExamples examples={translateExamples} />
              )}
              {currentPath === '/translate-html' && (
                <LanguageCodeExamples examples={translateHtmlExamples} />
              )}
              {currentPath === '/detect-languages' && (
                <LanguageCodeExamples examples={detectLanguagesExamples} />
              )}
              {currentPath === '/post-languages' && (
                <LanguageCodeExamples examples={postLanguagesExamples} />
              )}
              {currentPath === '/get-languages' && (
                <LanguageCodeExamples examples={getLanguagesExamples} />
              )}
              <DocumentationNavigation
                currentPath={currentPath}
                onNavigate={handleNavigate}
              />
            </div>
            
            {/* Table of Contents */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="fixed top-24 right-8 w-56 max-h-[calc(100vh-7rem)] bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 z-10">
                <TableOfContents content={currentContent} />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
