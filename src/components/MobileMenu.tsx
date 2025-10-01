import React from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DocumentationSidebar } from './DocumentationSidebar';
import logo2 from '@/assets/logo2.png';

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
      {/* Mobile menu button - Touch optimized */}
      <button
        onClick={onToggle}
        className="md:hidden p-2.5 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring active:scale-95"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in-0" 
            onClick={onToggle}
          />
          
          {/* Drawer Panel */}
          <div className={cn(
            "fixed bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-2xl shadow-lg",
            "h-[85vh] flex flex-col",
            "animate-in slide-in-from-bottom-full duration-300"
          )}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <img src={logo2} alt="Logo" className="h-6 w-6" />
                <h2 className="text-lg font-semibold text-foreground">
                  API Documentation
                </h2>
              </div>
              <button
                onClick={onToggle}
                className="p-2 rounded-md hover:bg-accent transition-colors active:scale-95"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Sidebar content with proper touch scrolling */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
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