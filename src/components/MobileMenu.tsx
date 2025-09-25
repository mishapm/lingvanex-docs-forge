import React from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DocumentationSidebar } from './DocumentationSidebar';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function MobileMenu({ isOpen, onToggle, currentPath, onNavigate }: MobileMenuProps) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    onToggle(); // Close menu after navigation
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={onToggle}
          />
          
          {/* Sidebar */}
          <div className={cn(
            "fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-sidebar border-r border-sidebar-border",
            "transform transition-transform duration-300 ease-in-out",
            "shadow-lg"
          )}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
              <h2 className="text-lg font-semibold text-sidebar-foreground">API Documentation</h2>
              <button
                onClick={onToggle}
                className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-sidebar-foreground" />
              </button>
            </div>
            
            {/* Sidebar content */}
            <div className="h-full pb-16 overflow-y-auto">
              <DocumentationSidebar 
                currentPath={currentPath}
                onNavigate={handleNavigate}
                className="h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}