# Lingvanex Translator API Documentation

A comprehensive documentation site for the Lingvanex Translator API built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Responsive design with mobile-friendly sidebar
- 🔍 Full-text search across all documentation
- 🌙 Dark/light theme toggle
- 📖 Complete API reference with code examples
- 🔄 Migration guide from Google Translate
- 💻 Code examples in 15+ programming languages

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ThemeProvider.tsx
│   ├── DocumentationSidebar.tsx
│   ├── SearchBar.tsx
│   └── MarkdownRenderer.tsx
├── data/               # Documentation content
│   ├── documentation.ts
│   ├── reference-docs.ts
│   └── migration-docs.ts
└── pages/
    └── Index.tsx       # Main documentation page
```

## Adding Documentation

1. Add new markdown content to the appropriate data file
2. Update the sidebar structure in `DocumentationSidebar.tsx`
3. Add search entries in `SearchBar.tsx`

## API Key Security

⚠️ **Important**: Never expose API keys in client-side code. This documentation site is for reference only. Always:

- Store API keys as environment variables
- Make API calls from your backend server
- Never commit API keys to version control

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Markdown
- Fuse.js (search)
- React Syntax Highlighter

## License

MIT License