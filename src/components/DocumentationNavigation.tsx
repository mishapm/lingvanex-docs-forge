import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationLink {
  path: string;
  title: string;
}

interface DocumentationNavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navigationOrder: NavigationLink[] = [
  { path: '/what-is-lingvanex', title: 'What is Lingvanex Translator Service?' },
  { path: '/language-support', title: 'Lingvanex API Supported Languages' },
  { path: '/pricing', title: 'Pricing' },
  { path: '/faq', title: 'Translator Service FAQ' },
  { path: '/getting-languages', title: 'Getting the list of languages' },
  { path: '/translate', title: 'Translate' },
  { path: '/google-migration-guide', title: 'Switching from Google Translate to Lingvanex Translator' },
  { path: '/method-translate', title: 'Method: translate' },
  { path: '/method-detect', title: 'Method: detect' },
  { path: '/method-languages', title: 'Method: languages' },
  { path: '/method-language-support', title: 'Language support' },
  { path: '/get-languages', title: 'Get languages' },
  { path: '/post-languages', title: 'Post languages' },
  { path: '/detect-languages', title: 'Detect languages' },
  { path: '/translate-html', title: 'Translate HTML' },
];

export function DocumentationNavigation({ currentPath, onNavigate }: DocumentationNavigationProps) {
  const currentIndex = navigationOrder.findIndex(item => item.path === currentPath);
  
  if (currentIndex === -1) return null;

  const previousPage = currentIndex > 0 ? navigationOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < navigationOrder.length - 1 ? navigationOrder[currentIndex + 1] : null;

  if (!previousPage && !nextPage) return null;

  return (
    <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
      <div className="flex-1">
        {previousPage && (
          <Button
            variant="ghost"
            onClick={() => onNavigate(previousPage.path)}
            className="h-auto p-4 justify-start text-left hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <ChevronLeft className="h-4 w-4 flex-shrink-0" />
              <div className="font-medium">{previousPage.title}</div>
            </div>
          </Button>
        )}
      </div>
      
      <div className="flex-1 flex justify-end">
        {nextPage && (
          <Button
            variant="ghost"
            onClick={() => onNavigate(nextPage.path)}
            className="h-auto p-4 justify-end text-right hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <div className="font-medium">{nextPage.title}</div>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}