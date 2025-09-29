import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';
import { ApiEndpoint } from './ApiEndpoint';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

function CodeBlock({ children, className, ...props }: any) {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);
  
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!match) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-sm" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="relative group my-4 rounded-xl border border-border overflow-hidden">
      <button
        onClick={handleCopy}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-md opacity-0 group-hover:opacity-100",
          "transition-opacity duration-200 z-10",
          "bg-background/80 hover:bg-background border border-border"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-success" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      <SyntaxHighlighter
        style={theme === 'dark' ? oneDark : oneLight}
        language={language}
        PreTag="pre"
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: '0.875rem',
          lineHeight: '1.5',
          border: 'none',
          outline: 'none',
        }}
        codeTagProps={{ style: { background: 'transparent' } }}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  // Process content to handle ApiEndpoint components
  const processContent = (text: string) => {
    const apiEndpointRegex = /<ApiEndpoint\s+method="([^"]+)"\s+url="([^"]+)"\s*\/>/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = apiEndpointRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        if (beforeText.trim()) {
          parts.push(
            <ReactMarkdown
              key={`text-${lastIndex}`}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {beforeText}
            </ReactMarkdown>
          );
        }
      }
      
      // Add the ApiEndpoint component
      parts.push(<ApiEndpoint key={`api-${match.index}`} method={match[1]} url={match[2]} />);
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      if (remainingText.trim()) {
        parts.push(
          <ReactMarkdown
            key={`text-${lastIndex}`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {remainingText}
          </ReactMarkdown>
        );
      }
    }
    
    // If no ApiEndpoint found, return normal markdown
    if (parts.length === 0) {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {text}
        </ReactMarkdown>
      );
    }
    
    return <>{parts}</>;
  };

  const markdownComponents = {
          code: CodeBlock,
        details: ({ children, ...props }) => (
          <details className="my-4 border border-border rounded-lg" {...props}>
            {children}
          </details>
        ),
        summary: ({ children, ...props }) => (
          <summary className="px-4 py-3 font-medium cursor-pointer hover:bg-muted/50 rounded-t-lg border-b border-border last:border-b-0 last:rounded-b-lg" {...props}>
            {children}
          </summary>
        ),
        div: ({ children, style, ...props }) => (
          <div 
            className={cn("my-4", props.className)} 
            style={style ? { 
              display: style.display,
              justifyContent: style.justifyContent || style['justify-content'],
              margin: style.margin 
            } : undefined}
            {...props}
          >
            {children}
          </div>
        ),
        iframe: ({ src, width, height, title, allow, ...props }) => (
          <div className="flex justify-center my-6">
            <iframe
              src={src}
              width={width ? Math.round(parseInt(width) * 1.5) : width}
              height={height ? Math.round(parseInt(height) * 1.5) : height}
              title={title}
              frameBorder="0"
              allow={allow}
              referrerPolicy={(props as any).referrerpolicy}
              allowFullScreen={(props as any).allowfullscreen}
              className="rounded-lg border border-border"
            />
          </div>
        ),
        h1: ({ children, ...props }) => (
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-8 mb-4" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" {...props}>
            {children}
          </h3>
        ),
        p: ({ children, ...props }) => (
          <p className="text-foreground leading-7 mb-4" {...props}>
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul className="text-foreground space-y-2 mb-4" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="text-foreground space-y-2 mb-4" {...props}>
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => (
          <li className="text-foreground" {...props}>
            {children}
          </li>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-4" {...props}>
            {children}
          </blockquote>
        ),
        table: ({ children, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-border" {...props}>
              {children}
            </table>
          </div>
        ),
        th: ({ children, ...props }) => (
          <th className="border border-border px-4 py-2 bg-muted font-semibold text-left" {...props}>
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="border border-border px-4 py-2" {...props}>
            {children}
          </td>
        ),
        a: ({ children, href, ...props }) => (
          <a 
            href={href}
            className="text-primary hover:text-primary-hover underline"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
          >
            {children}
          </a>
        ),
  };

  return (
    <div className={cn("prose prose-slate dark:prose-invert max-w-none", className)}>
      {processContent(content)}
    </div>
  );
}