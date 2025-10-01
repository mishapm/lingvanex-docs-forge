import React from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DocumentationSidebar } from './DocumentationSidebar';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
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

      {/* Drawer for mobile navigation */}
      <Drawer open={isOpen} onOpenChange={onToggle}>
        <DrawerContent className="h-[85vh] md:hidden">
          <DrawerHeader className="border-b border-sidebar-border pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo2} alt="Logo" className="h-6 w-6" />
                <DrawerTitle className="text-lg font-semibold">
                  API Documentation
                </DrawerTitle>
              </div>
              <button
                onClick={onToggle}
                className="p-2 rounded-md hover:bg-sidebar-accent transition-colors active:scale-95"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DrawerHeader>
          
          {/* Sidebar content with proper touch scrolling */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            <DocumentationSidebar 
              currentPath={currentPath}
              onNavigate={handleNavigate}
              className="h-full"
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}