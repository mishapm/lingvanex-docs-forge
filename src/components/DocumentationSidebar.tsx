import React from 'react';
import { ChevronDown, ChevronRight, Book, Code, ArrowLeftRight, Globe, Settings, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo2 from '@/assets/logo2.png';
interface SidebarItem {
  id: string;
  title: string;
  icon?: React.ComponentType<{
    className?: string;
  }>;
  children?: SidebarItem[];
  href?: string;
}
const sidebarStructure: SidebarItem[] = [{
  id: 'overview',
  title: 'Overview',
  icon: Book,
  children: [{
    id: 'what-is-lingvanex',
    title: 'What is Lingvanex Translator Service?',
    href: '/what-is-lingvanex'
  }, {
    id: 'language-support',
    title: 'Lingvanex API Supported Languages',
    href: '/language-support'
  }, {
    id: 'pricing',
    title: 'Pricing',
    href: '/pricing'
  }, {
    id: 'faq',
    title: 'Translator Service FAQ',
    href: '/faq'
  }]
}, {
  id: 'reference',
  title: 'Reference',
  icon: Code,
  children: [{
    id: 'getting-languages',
    title: 'Getting the list of languages',
    href: '/getting-languages'
  }, {
    id: 'translate',
    title: 'Translate',
    href: '/translate'
  }]
}, {
  id: 'google-migration',
  title: 'Switching from Google Translate to Lingvanex Translator',
  icon: ArrowLeftRight,
  children: [{
    id: 'google-migration-guide',
    title: 'Switching from Google Translate to Lingvanex Translator',
    href: '/google-migration-guide',
    children: [{
      id: 'method-translate',
      title: 'Method: translate',
      href: '/method-translate'
    }, {
      id: 'method-detect',
      title: 'Method: detect',
      href: '/method-detect'
    }, {
      id: 'method-languages',
      title: 'Method: languages',
      href: '/method-languages'
    }, {
      id: 'method-language-support',
      title: 'Language support',
      href: '/method-language-support'
    }]
  }, {
    id: 'get-languages',
    title: 'Get languages',
    href: '/get-languages'
  }, {
    id: 'post-languages',
    title: 'Post languages',
    href: '/post-languages'
  }, {
    id: 'detect-languages',
    title: 'Detect languages',
    href: '/detect-languages'
  }, {
    id: 'translate-html',
    title: 'Translate HTML',
    href: '/translate-html'
  }]
}];
interface DocumentationSidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  className?: string;
}
export function DocumentationSidebar({
  currentPath,
  onNavigate,
  className
}: DocumentationSidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set(['overview', 'reference', 'google-migration', 'google-migration-guide']));
  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };
  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.href === currentPath;
    return <div key={item.id} className="w-full">
        {level === 0 ? <div className={cn("flex items-center justify-between w-full p-3 text-left transition-colors", "text-sidebar-foreground", "cursor-pointer select-none")} onClick={() => hasChildren && toggleExpanded(item.id)}>
            <div className="flex items-center gap-2">
              <span className="font-medium">{item.title}</span>
            </div>
            {hasChildren && (isExpanded ? <ChevronDown className="h-4 w-4 text-sidebar-foreground/60 flex-shrink-0" /> : <ChevronRight className="h-4 w-4 text-sidebar-foreground/60 flex-shrink-0" />)}
          </div> : level === 1 ? <div className={cn("flex items-center justify-between w-full p-2 text-left text-sm transition-colors cursor-pointer", "ml-6 border-l border-sidebar-border pl-4", hasChildren ? "select-none" : "", isActive && !hasChildren ? "bg-primary text-primary-foreground font-medium rounded-md" : "hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground")} onClick={() => {
        if (hasChildren) {
          toggleExpanded(item.id);
        } else if (item.href) {
          onNavigate(item.href);
        }
      }}>
            <span>{item.title}</span>
            {hasChildren && (isExpanded ? <ChevronDown className="h-4 w-4 text-sidebar-foreground/60 flex-shrink-0 mr-2" /> : <ChevronRight className="h-4 w-4 text-sidebar-foreground/60 flex-shrink-0 mr-2" />)}
          </div> : <button className={cn("flex items-center w-full p-2 text-left text-sm rounded-md transition-colors cursor-pointer", "ml-12 border-l border-sidebar-border pl-4", isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground")} onClick={() => item.href && onNavigate(item.href)}>
            {item.title}
          </button>}

        {hasChildren && isExpanded && <div className="mt-1 space-y-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>}
      </div>;
  };
  return <nav className={cn("h-full overflow-y-auto py-4", className)}>
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2">
          <img src={logo2} alt="Logo" className="h-6 w-6" />
          <h2 className="text-lg font-semibold text-sidebar-foreground">Lingvanex</h2>
        </div>
      </div>
      <div className="px-4 space-y-2">
        {sidebarStructure.map(item => renderSidebarItem(item))}
      </div>
    </nav>;
}