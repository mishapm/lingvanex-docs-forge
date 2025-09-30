import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Fuse from 'fuse.js';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
  section?: string;
}

// Mock search data - in a real app, this would come from your documentation pages
const searchData: SearchResult[] = [
  {
    id: 'overview-1',
    title: 'What is Lingvanex Translator Service?',
    content: 'Lingvanex Translator Service is a powerful API for translating text between multiple languages.',
    path: '/what-is-lingvanex',
    section: 'Overview'
  },
  {
    id: 'translate-1',
    title: 'Translate API',
    content: 'POST /b1/api/v3/translate endpoint for translating text with authorization header',
    path: '/translate',
    section: 'Reference'
  },
  {
    id: 'auth-1',
    title: 'Authorization',
    content: 'Use Lingvanex-Auth-Key in Authorization header. Keep your API key secret.',
    path: '/translate',
    section: 'Authentication'
  },
  {
    id: 'languages-1',
    title: 'Supported Languages',
    content: 'en_GB, en_US, de_DE, ru_RU, fr_FR, es_ES and many more language codes',
    path: '/language-support',
    section: 'Languages'
  },
  {
    id: 'google-migration-1',
    title: 'Switching from Google Translate',
    content: 'Migration guide from Google Translate API to Lingvanex Translator',
    path: '/method-translate',
    section: 'Migration'
  }
];

interface SearchBarProps {
  onNavigate: (path: string) => void;
  className?: string;
}

export function SearchBar({ onNavigate, className }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = new Fuse(searchData, {
    keys: ['title', 'content', 'section'],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = fuse.search(query).map(result => result.item);
    setResults(searchResults.slice(0, 8));
    setIsOpen(true);
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    onNavigate(result.path);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-md", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          className={cn(
            "w-full pl-10 pr-10 py-2 border border-input rounded-lg",
            "bg-background text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "transition-all duration-200"
          )}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className={cn(
          "absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50",
          "max-h-80 overflow-y-auto"
        )}>
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className={cn(
                "w-full text-left p-3 hover:bg-accent transition-colors",
                "border-b border-border last:border-b-0",
                index === selectedIndex && "bg-accent"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground text-sm mb-1 truncate">
                    {result.title}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {result.content}
                  </div>
                </div>
                {result.section && (
                  <div className="ml-3 flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      {result.section}
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}