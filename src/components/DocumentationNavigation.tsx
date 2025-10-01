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
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-8 mt-8 border-t border-border">
      <div className="flex-1 w-full sm:w-auto">
        {previousPage && (
          <Button
            variant="ghost"
            onClick={() => onNavigate(previousPage.path)}
            className="h-auto p-4 justify-start text-left hover:bg-muted/50 w-full sm:w-auto"
          >
            <div className="flex items-center gap-3 min-w-0">
              <ChevronLeft className="h-4 w-4 flex-shrink-0" />
              <div className="font-medium truncate">{previousPage.title}</div>
            </div>
          </Button>
        )}
      </div>
      
      <div className="flex-1 w-full sm:w-auto flex sm:justify-end">
        {nextPage && (
          <Button
            variant="ghost"
            onClick={() => onNavigate(nextPage.path)}
            className="h-auto p-4 justify-start sm:justify-end text-left sm:text-right hover:bg-muted/50 w-full sm:w-auto"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="font-medium truncate flex-1">{nextPage.title}</div>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}