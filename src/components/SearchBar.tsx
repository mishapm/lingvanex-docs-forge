import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Fuse from 'fuse.js';
import { buildSearchIndex } from '@/utils/searchIndexer';
import { documentationContent } from '@/data/documentation';
import { referenceDocumentation } from '@/data/reference-docs';
import { migrationDocumentation } from '@/data/migration-docs';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
  section?: string;
}

interface SearchBarProps {
  onNavigate: (path: string) => void;
  className?: string;
  autoFocus?: boolean;
}

export function SearchBar({ onNavigate, className, autoFocus }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build search index from all documentation sources
  const searchData = useMemo(() => {
    return buildSearchIndex({
      overview: documentationContent,
      reference: referenceDocumentation,
      migration: migrationDocumentation
    });
  }, []);

  const fuse = useMemo(() => new Fuse(searchData, {
    keys: ['title', 'content', 'section'],
    threshold: 0.3,
    includeScore: true,
  }), [searchData]);

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
    <div ref={searchRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          autoFocus={autoFocus}
          className={cn(
            "w-full pl-10 sm:pl-11 pr-10 sm:pr-11 py-2.5 sm:py-2 border border-input rounded-lg",
            "bg-background text-foreground text-sm sm:text-base placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "transition-all duration-200 touch-manipulation"
          )}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 active:scale-95 transition-transform"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className={cn(
          "absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50",
          "max-h-[60vh] sm:max-h-80 overflow-y-auto overscroll-contain"
        )}>
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className={cn(
                "w-full text-left p-4 sm:p-3 hover:bg-accent transition-colors active:bg-accent/80",
                "border-b border-border last:border-b-0 touch-manipulation",
                index === selectedIndex && "bg-accent"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground text-sm sm:text-base mb-1 truncate">
                    {result.title}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {result.content}
                  </div>
                </div>
                {result.section && (
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary whitespace-nowrap">
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