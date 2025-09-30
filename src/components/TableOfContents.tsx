import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingMatches = content.match(/^#{1,6}\s+.+$/gm);
    if (!headingMatches) return;

    const items = headingMatches.map((heading, index) => {
      const level = heading.match(/^#+/)?.[0].length || 1;
      const text = heading.replace(/^#+\s+/, '').trim();
      const id = `heading-${index}`;
      return { id, text, level };
    });

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let currentActiveId = '';

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActiveId = heading.id;
        }
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string, text: string) => {
    // Find heading by text content since IDs might not match exactly
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const heading of headings) {
      if (heading.textContent?.trim() === text) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <nav className={cn("space-y-1", className)}>
      <div className="text-sm font-semibold text-foreground mb-3">On this page</div>
      <div className="space-y-1">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id, item.text)}
            className={cn(
              "block w-full text-left text-sm py-1 px-2 rounded transition-colors",
              "hover:bg-muted hover:text-foreground",
              item.level === 1 && "font-medium",
              item.level === 2 && "ml-2 text-muted-foreground",
              item.level === 3 && "ml-4 text-muted-foreground text-xs",
              item.level >= 4 && "ml-6 text-muted-foreground text-xs",
              activeId === item.id && "bg-primary/10 text-primary font-medium"
            )}
          >
            <span className="truncate block">{item.text}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}