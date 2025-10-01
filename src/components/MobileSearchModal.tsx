import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { cn } from '@/lib/utils';

interface MobileSearchModalProps {
  onNavigate: (path: string) => void;
}

export function MobileSearchModal({ onNavigate }: MobileSearchModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring active:scale-95"
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-sm animate-in fade-in-0" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className={cn(
            "fixed top-0 left-0 right-0 bg-card border-b border-border shadow-lg",
            "p-4 animate-in slide-in-from-top-full duration-300"
          )}>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <SearchBar 
                  onNavigate={handleNavigate} 
                  className="w-full" 
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-accent transition-colors active:scale-95 flex-shrink-0"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
