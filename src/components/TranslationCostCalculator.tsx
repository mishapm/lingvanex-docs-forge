import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, Languages } from 'lucide-react';

interface LanguageTarget {
  code: string;
  name: string;
}

const targetLanguages: LanguageTarget[] = [
  { code: 'en_US', name: 'English' },
  { code: 'ru_RU', name: 'Russian' },
  { code: 'de_DE', name: 'German' },
  { code: 'fr_FR', name: 'French' },
  { code: 'es_ES', name: 'Spanish' },
  { code: 'pt_BR', name: 'Portuguese' },
  { code: 'zh-Hans_CN', name: 'Chinese' },
  { code: 'ja_JP', name: 'Japanese' },
  { code: 'ko_KR', name: 'Korean' },
];

export function TranslationCostCalculator() {
  const [characterCount, setCharacterCount] = useState<string>('50000');

  const calculations = useMemo(() => {
    const chars = parseInt(characterCount) || 0;
    const pricePerMillionChars = 5; // $5 per 1M characters
    
    // Cost per language (each language is a separate translation)
    const costPerLanguage = (chars / 1_000_000) * pricePerMillionChars;
    
    // Since source is English, we translate to 8 other languages (excluding English)
    const languagesToTranslate = targetLanguages.filter(lang => lang.code !== 'en_US');
    const totalLanguages = languagesToTranslate.length;
    
    // Total cost
    const totalCost = costPerLanguage * totalLanguages;
    
    // Total characters processed (source chars × number of target languages)
    const totalCharsProcessed = chars * totalLanguages;
    
    return {
      chars,
      costPerLanguage,
      totalLanguages,
      languagesToTranslate,
      totalCost,
      totalCharsProcessed,
      pricePerMillionChars,
    };
  }, [characterCount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="space-y-6 my-8">
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Translation Cost Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate translation costs for your application using Lingvanex API pricing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="space-y-2">
            <Label htmlFor="charCount" className="text-base font-medium">
              Total Characters in Your Application
            </Label>
            <Input
              id="charCount"
              type="number"
              value={characterCount}
              onChange={(e) => setCharacterCount(e.target.value)}
              placeholder="Enter character count"
              className="text-lg"
              min="0"
            />
            <p className="text-sm text-muted-foreground">
              💡 Tip: Include all text content (UI labels, messages, descriptions, etc.)
            </p>
          </div>

          {/* Pricing Info */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Pricing Model:</span>
              <Badge variant="secondary" className="text-sm">
                ${calculations.pricePerMillionChars} per 1M characters
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Source Language:</span>
              <Badge variant="outline">English</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Target Languages:</span>
              <Badge variant="outline">{calculations.totalLanguages} languages</Badge>
            </div>
          </div>

          {/* Target Languages List */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Languages className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Target Languages</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {calculations.languagesToTranslate.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-2 p-2 rounded-md bg-muted/30 border border-border"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Per-Language Cost */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Cost Breakdown
            </h3>
            
            <div className="space-y-2">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cost per language:</span>
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(calculations.costPerLanguage)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  ({formatNumber(calculations.chars)} characters × $5 / 1M)
                </p>
              </div>

              {/* Individual Language Costs */}
              <div className="grid gap-2 mt-4">
                {calculations.languagesToTranslate.map((lang) => (
                  <div
                    key={lang.code}
                    className="flex justify-between items-center p-3 rounded-md border border-border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-sm font-semibold">
                      {formatCurrency(calculations.costPerLanguage)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Cost */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg p-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-foreground">
                  Total Translation Cost:
                </span>
                <span className="text-3xl font-bold text-primary">
                  {formatCurrency(calculations.totalCost)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Total characters processed:</span>
                <span className="font-medium">
                  {formatNumber(calculations.totalCharsProcessed)} chars
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Number of translations:</span>
                <span className="font-medium">
                  {calculations.totalLanguages} languages
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">
              📝 Important Notes:
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
              <li>Character count includes letters, punctuation, spaces, and whitespace</li>
              <li>HTML tags are NOT counted if you use translateMode: "html"</li>
              <li>Non-translatable tags (notranslate, t, shade) are NOT counted</li>
              <li>Each target language counts as a separate translation</li>
              <li>Free tier: $1 credit = 200,000 characters when you create an API key</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
