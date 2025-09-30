interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
  section?: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/#{1,6}\s/g, '') // Remove heading markers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\|/g, ' ') // Remove table pipes
    .replace(/[-=]{3,}/g, '') // Remove horizontal rules
    .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
    .trim();
}

function extractSections(markdown: string): Array<{ heading: string; content: string; level: number }> {
  const lines = markdown.split('\n');
  const sections: Array<{ heading: string; content: string; level: number }> = [];
  let currentSection: { heading: string; content: string; level: number } | null = null;

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      // Save previous section if exists
      if (currentSection) {
        sections.push(currentSection);
      }
      
      // Start new section
      const level = headingMatch[1].length;
      const heading = headingMatch[2];
      currentSection = { heading, content: '', level };
    } else if (currentSection) {
      // Add content to current section
      currentSection.content += line + '\n';
    }
  }

  // Add last section
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

export function buildSearchIndex(documentationSources: Record<string, Record<string, string>>): SearchResult[] {
  const searchIndex: SearchResult[] = [];
  let idCounter = 0;

  // Iterate through all documentation sources
  for (const [sourceName, docs] of Object.entries(documentationSources)) {
    // Iterate through each route/document
    for (const [path, markdown] of Object.entries(docs)) {
      // Extract sections from the markdown
      const sections = extractSections(markdown);
      
      // Add full page as searchable
      const pageTitle = sections[0]?.heading || path.replace('/', '').replace(/-/g, ' ');
      const pageContent = stripMarkdown(markdown).substring(0, 300);
      
      searchIndex.push({
        id: `${idCounter++}`,
        title: pageTitle,
        content: pageContent,
        path: path,
        section: sourceName === 'reference' ? 'Reference' : 
                 sourceName === 'migration' ? 'Migration' : 'Overview'
      });

      // Add each section as a separate searchable entry
      for (const section of sections) {
        if (section.content.trim()) {
          const cleanContent = stripMarkdown(section.content).substring(0, 200);
          
          if (cleanContent.length > 10) { // Only add sections with meaningful content
            searchIndex.push({
              id: `${idCounter++}`,
              title: section.heading,
              content: cleanContent,
              path: path,
              section: sourceName === 'reference' ? 'Reference' : 
                       sourceName === 'migration' ? 'Migration' : 'Overview'
            });
          }
        }
      }
    }
  }

  return searchIndex;
}
