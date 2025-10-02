import React, { useEffect, useRef, useState } from 'react';
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [panelTop, setPanelTop] = useState<number>(56);

  // Manage mount/unmount to allow exit animation
  const [mounted, setMounted] = useState<boolean>(isOpen);
  const [exiting, setExiting] = useState<boolean>(false);

  const updatePanelTop = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    const top = rect ? rect.bottom + 8 : 56; // 8px gap below the icon
    setPanelTop(top);
  };

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Measure on open and next frame for accuracy
      updatePanelTop();
      requestAnimationFrame(updatePanelTop);
    } else if (mounted) {
      setExiting(true);
      const t = setTimeout(() => {
        setMounted(false);
        setExiting(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, mounted]);

  useEffect(() => {
    const handler = () => updatePanelTop();
    window.addEventListener('resize', handler);
    window.addEventListener('scroll', handler, true);
    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('scroll', handler, true);
    };
  }, []);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    onToggle(); // Close menu after navigation
  };

  return (
    <>
      {/* Mobile menu button - Touch optimized */}
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="md:hidden p-2.5 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring active:scale-95"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile dropdown overlay + panel (opens below the hamburger) */}
      {mounted && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className={cn(
              'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300',
              isOpen && !exiting ? 'opacity-100' : 'opacity-0'
            )}
            onClick={onToggle}
          />

          {/* Dropdown Panel - slides down from the top (below button) */}
          <div
            className={cn(
              'fixed left-0 right-0 z-50 bg-card border-b border-border rounded-b-2xl shadow-2xl',
              'flex flex-col',
              'transition-all duration-300 ease-out will-change-transform',
              isOpen && !exiting ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            )}
            style={{
              top: panelTop,
              maxHeight: `calc(100dvh - ${panelTop}px)`,
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card flex-shrink-0">
              <div className="flex items-center gap-2">
                <img src={logo2} alt="Lingvanex logo" className="h-6 w-6" />
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
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
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 bg-card">
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