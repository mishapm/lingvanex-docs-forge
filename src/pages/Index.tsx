import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DocumentationSidebar } from '@/components/DocumentationSidebar';
import { SearchBar } from '@/components/SearchBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileMenu } from '@/components/MobileMenu';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { cn } from '@/lib/utils';
import documentationContent from '@/data/documentation';
import referenceDocumentation from '@/data/reference-docs';
import migrationDocumentation from '@/data/migration-docs';

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

  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-80 bg-sidebar border-r border-sidebar-border flex-shrink-0">
        <DocumentationSidebar 
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-background border-b border-border px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              currentPath={currentPath}
              onNavigate={handleNavigate}
            />
            <h1 className="text-lg font-semibold text-foreground hidden sm:block">
              Lingvanex Translator API
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <SearchBar onNavigate={handleNavigate} className="w-full max-w-sm" />
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <MarkdownRenderer content={currentContent} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
