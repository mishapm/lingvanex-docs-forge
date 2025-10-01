import { Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ApiEndpointProps {
  method: string;
  url: string;
}

export const ApiEndpoint = ({ method, url }: ApiEndpointProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodStyles = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'POST':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 mb-6 bg-muted/50 rounded-lg border">
      <span
        className={cn(
          "px-3 py-1 text-sm font-semibold rounded-md border uppercase w-fit flex-shrink-0",
          getMethodStyles(method)
        )}
      >
        {method}
      </span>
      <span className="font-mono text-sm text-foreground/80 flex-1 break-all min-w-0">
        {url}
      </span>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={copyToClipboard}
          className="p-2 hover:bg-background/80 rounded-md transition-colors"
          title="Copy URL"
        >
          <Copy className="h-4 w-4" />
        </button>
        {copied && (
          <span className="text-sm text-green-600 dark:text-green-400 whitespace-nowrap">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};