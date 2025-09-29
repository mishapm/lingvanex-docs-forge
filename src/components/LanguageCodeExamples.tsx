import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MarkdownRenderer } from './MarkdownRenderer';

interface LanguageExample {
  language: string;
  request: string;
  response: string;
}

interface LanguageCodeExamplesProps {
  examples: LanguageExample[];
}

export function LanguageCodeExamples({ examples }: LanguageCodeExamplesProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(examples[0]?.language || 'Shell');

  const currentExample = examples.find(ex => ex.language === selectedLanguage) || examples[0];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-foreground mb-4">Code Examples</h3>
      
      <div className="mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-48 justify-between bg-background">
              {selectedLanguage}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-background border border-border shadow-lg z-50">
            {examples.map((example) => (
              <DropdownMenuItem
                key={example.language}
                onClick={() => setSelectedLanguage(example.language)}
                className="cursor-pointer hover:bg-muted focus:bg-muted"
              >
                {example.language}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {currentExample && (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-foreground mb-2">Request</h4>
            <MarkdownRenderer content={currentExample.request} />
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-foreground mb-2">Response</h4>
            <MarkdownRenderer content={currentExample.response} />
          </div>
        </div>
      )}
    </div>
  );
}