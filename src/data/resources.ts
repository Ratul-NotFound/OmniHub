export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'ai' | 'free' | 'websites' | 'libraries' | 'design' | 'learning' | 'utilities';
  subcategory?: string; // Primary subcategory for AI and Free Tools grouping
  subcategories?: string[]; // Optional array for tools belonging to multiple subcategories
  tags: string[];
  isHot?: boolean;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'All Resources',
    iconName: 'LayoutDashboard',
    description: 'Browse all curated developer resources and tools'
  },
  {
    id: 'ai',
    name: 'AI Tools',
    iconName: 'Sparkles',
    description: 'Artificial intelligence tools for coding, generation, and productivity'
  },
  {
    id: 'free',
    name: 'Free Resources',
    iconName: 'Gift',
    description: 'Free tier databases, hostings, SSL domains, and free LLM APIs'
  },
  {
    id: 'websites',
    name: 'Dev Hubs & News',
    iconName: 'Globe',
    description: 'Essential websites, news aggregators, and developer communities'
  },
  {
    id: 'libraries',
    name: 'Libraries & Frameworks',
    iconName: 'Blocks',
    description: 'Modern front-end, back-end, and styling libraries'
  },
  {
    id: 'design',
    name: 'UI & Design',
    iconName: 'Palette',
    description: 'Beautiful assets, design tools, font directories, and color palettes'
  },
  {
    id: 'learning',
    name: 'Docs & Learning',
    iconName: 'BookOpen',
    description: 'High-quality interactive guides, documentation, and tutorials'
  },
  {
    id: 'utilities',
    name: 'Online Dev Tools & Testing',
    iconName: 'Wrench',
    description: 'Standalone web tools to test APIs, format JSON, inspect bundle sizes, and generate favicons'
  }
];

export const AI_SUBCATEGORIES: Subcategory[] = [
  { id: 'all', name: 'All AI Tools' },
  { id: 'llm', name: 'LLMs & Chat' },
  { id: 'coding', name: 'AI Coding' },
  { id: 'slides', name: 'Slides & Presentations' },
  { id: 'diagrams', name: 'Diagrams & Elements' },
  { id: 'uiux', name: 'UI/UX & Design' },
  { id: 'appbuilder', name: 'Prompt to App/Web' },
  { id: 'devplatform', name: 'APIs & Model Hubs' },
  { id: 'image', name: 'Image Gen' },
  { id: 'video', name: 'Video Gen' },
  { id: 'audio', name: 'Audio & Voice' }
];

export const FREE_SUBCATEGORIES: Subcategory[] = [
  { id: 'all', name: 'All Free Tools' },
  { id: 'database', name: 'Free Databases' },
  { id: 'hosting', name: 'Free Hosting & Cloud' },
  { id: 'domains', name: 'Free Domains & SSL' },
  { id: 'llmapi', name: 'Free AI & LLM APIs' },
  { id: 'freedev', name: 'Free Dev Tools & Auth' },
  { id: 'freeassets', name: 'Free UI Assets & Fonts' },
  { id: 'freecms', name: 'Free Headless CMS' },
  { id: 'freestorage', name: 'Free Storage & CDN' }
];

export const LIBRARY_SUBCATEGORIES: Subcategory[] = [
  { id: 'all', name: 'All Libraries' },
  { id: 'uicomponents', name: 'Copy-Paste UI Components' },
  { id: 'frontend', name: 'Frontend Frameworks' },
  { id: 'backend', name: 'Backend & Server' },
  { id: 'styling', name: 'CSS & Motion' },
  { id: 'stateapi', name: 'State & Data Fetching' }
];

export const RESOURCES: Resource[] = [
  // ================= AI TOOLS =================
  
  // --- LLMs & Chat ---
  {
    id: 'claude',
    title: 'Claude AI',
    description: 'Anthropic\'s state-of-the-art conversational AI, highly praised for coding precision, code refactoring, and logical reasoning.',
    url: 'https://claude.ai',
    category: 'ai',
    subcategory: 'llm',
    tags: ['LLM', 'Anthropic', 'Coding', 'Reasoning'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'OpenAI\'s flagship assistant offering reasoning models (o1/o3), customized GPTs, web searching, and DALL-E image creation.',
    url: 'https://chatgpt.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['LLM', 'OpenAI', 'Conversational'],
    rating: 4.8
  },
  {
    id: 'gemini',
    title: 'Google Gemini',
    description: 'Google\'s advanced multimodal AI models. Features a massive 2 million token context window and integration into Google Workspace.',
    url: 'https://gemini.google.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['LLM', 'Multimodal', 'Google', 'Long Context'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'deepseek',
    title: 'DeepSeek',
    description: 'Ultra-fast, high-performance reasoning model suite specializing in advanced mathematics, code generation, and deep analysis.',
    url: 'https://www.deepseek.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['LLM', 'Open Source', 'Reasoning', 'Coding'],
    isHot: true,
    rating: 4.9
  },
  // --- AI Coding ---
  {
    id: 'cursor',
    title: 'Cursor Editor',
    description: 'AI-powered fork of VS Code built for pair-programming. Features inline edits, codebase-wide chat, and intelligent autocomplete. (Free tier available)',
    url: 'https://cursor.com',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free Tier', 'IDE', 'AI Coding', 'VS Code'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'windsurf',
    title: 'Windsurf Editor',
    description: 'Revolutionary AI IDE by Codeium featuring Cascade agent workflows, real-time codebase awareness, and multi-file editing. (Free tier available)',
    url: 'https://codeium.com/windsurf',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free Tier', 'AI IDE', 'Cascade Agent', 'Codeium'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'amazon-q',
    title: 'Amazon Q Developer',
    description: 'AWS generative AI coding assistant for IDEs. Generates code, explains logic, and assists debugging. (100% Free tier for individuals)',
    url: 'https://aws.amazon.com/q/developer/',
    category: 'ai',
    subcategory: 'coding',
    tags: ['100% Free Tier', 'AWS', 'IDE Extension', 'Coding Assistant'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot',
    description: 'Industry-standard AI pair programmer. Suggests code, writes tests, and refactors syntax in real time inside your IDE. (Free tier available)',
    url: 'https://github.com/features/copilot',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free Tier', 'Coding Assistant', 'IDE Extension'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'codeium',
    title: 'Codeium',
    description: 'Free, ultra-fast AI code autocomplete, inline chat, and codebase search supporting over 70+ languages. (100% Free for individuals)',
    url: 'https://codeium.com',
    category: 'ai',
    subcategory: 'coding',
    tags: ['100% Free Tier', 'Autocomplete', 'IDE Extension'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'cody-sourcegraph',
    title: 'Cody (Sourcegraph)',
    description: 'AI code assistant with deep codebase context. Reads entire repositories to write, explain, and fix code. (Free tier available)',
    url: 'https://sourcegraph.com/cody',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free Tier', 'Codebase Search', 'Repo Context'],
    rating: 4.7
  },
  {
    id: 'aider-cli',
    title: 'Aider CLI Agent',
    description: 'Open-source AI pair programmer for your terminal. Edits code files directly in your local git repository. (100% Free & Open Source)',
    url: 'https://aider.chat',
    category: 'ai',
    subcategory: 'coding',
    tags: ['100% Free', 'CLI Agent', 'Git Integration', 'Open Source'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'supermaven',
    title: 'Supermaven',
    description: 'The fastest AI code completion editor extension. Features a massive 300k token context window and near-instant suggestions. (Free tier available)',
    url: 'https://supermaven.com',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free Tier', 'Autocomplete', 'Fast Speed'],
    rating: 4.8
  },
  {
    id: 'continue-dev',
    title: 'Continue.dev',
    description: 'Open-source AI coding assistant for VS Code and JetBrains. Connect any local (Ollama) or cloud LLMs. (100% Free & Open Source)',
    url: 'https://www.continue.dev',
    category: 'ai',
    subcategory: 'coding',
    tags: ['100% Free', 'Open Source', 'Custom LLMs', 'Sidebar'],
    rating: 4.8
  },
  {
    id: 'coderabbit',
    title: 'CodeRabbit AI',
    description: 'AI-powered Pull Request reviewer agent. Reviews code changes, detects bugs, and posts inline review suggestions. (Free for Open Source)',
    url: 'https://coderabbit.ai',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Free for Open Source', 'PR Reviewer', 'Code Quality'],
    rating: 4.7
  },
  {
    id: 'claude-code',
    title: 'Claude Code (Anthropic)',
    description: 'Anthropic\'s agentic command-line coding tool. Operates directly in your terminal to inspect codebases, execute git commands, and refactor code.',
    url: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code',
    category: 'ai',
    subcategory: 'coding',
    tags: ['CLI Agent', 'Anthropic', 'Terminal Coding', 'Agentic AI'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'antigravity-ai',
    title: 'Antigravity AI',
    description: 'Google DeepMind\'s next-generation agentic AI coding assistant built for pair-programming, automated workspace management, and complex codebase refactoring.',
    url: 'https://deepmind.google',
    category: 'ai',
    subcategory: 'coding',
    tags: ['Agentic AI', 'Google DeepMind', 'Pair Programming', 'AI Coding'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'groq',
    title: 'Groq',
    description: 'Real-time LPU (Language Processing Unit) inference platform delivering near-zero latency text replies for top open-weights models.',
    url: 'https://groq.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['Inference', 'LPU', 'Speed', 'API'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'phind',
    title: 'Phind',
    description: 'Intelligent search engine engineered for developers. Instantly answers technical questions with detailed coding explanations and links.',
    url: 'https://www.phind.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['Developer Search', 'Q&A', 'Code Reference'],
    rating: 4.7
  },
  {
    id: 'kimi',
    title: 'Kimi AI',
    description: 'Moonshot AI\'s conversational assistant designed for searching, reading large PDF files, and processing complex, long documentation.',
    url: 'https://kimi.moonshot.cn',
    category: 'ai',
    subcategory: 'llm',
    tags: ['LLM', 'Long Context', 'Document Analysis'],
    rating: 4.7
  },
  {
    id: 'poe',
    title: 'Poe',
    description: 'Quora\'s AI aggregator allowing users to chat with diverse LLM engines (Claude, ChatGPT, Llama) and create custom bot prompt wrappers.',
    url: 'https://poe.com',
    category: 'ai',
    subcategory: 'llm',
    tags: ['Aggregator', 'Custom Bots', 'Chatbots'],
    rating: 4.6
  },
  {
    id: 'perplexity',
    title: 'Perplexity AI',
    description: 'AI-powered conversational search engine providing fast, cited answers with real-time web references and deep academic analysis.',
    url: 'https://perplexity.ai',
    category: 'ai',
    subcategory: 'llm',
    tags: ['AI Search', 'Research', 'Citations', 'LLM'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'mistral-chat',
    title: 'Mistral Le Chat',
    description: 'European frontier model interface powered by Mistral Large and Pixtral, offering fast reasoning and open weights accessibility.',
    url: 'https://chat.mistral.ai',
    category: 'ai',
    subcategory: 'llm',
    tags: ['Frontier Model', 'Open Weights', 'Mistral AI'],
    rating: 4.7
  },

  // --- Slides & Presentations ---
  {
    id: 'gamma',
    title: 'Gamma App',
    description: 'A new medium for presenting ideas. Powered by AI, it lets you generate beautiful presentations, webpages, and docs in seconds.',
    url: 'https://gamma.app',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Slides', 'Presentations', 'Document AI'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'canva-presentation',
    title: 'Canva Presentation AI',
    description: 'Canva\'s "Magic Design" for presentations. Generate full outlines, slide templates, content layouts, and graphic visual elements instantly.',
    url: 'https://www.canva.com',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Slides', 'Canva', 'Design Builder'],
    rating: 4.7
  },
  {
    id: 'beautiful-ai',
    title: 'Beautiful.ai',
    description: 'AI-powered presentation software that automatically applies rules of good design to structure, clean, and format slides.',
    url: 'https://www.beautiful.ai',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Presentations', 'Design Rules', 'Formatting'],
    rating: 4.6
  },
  {
    id: 'tome',
    title: 'Tome AI',
    description: 'Generative storytelling platform that helps developers and creators build structured presentation decks and narratives.',
    url: 'https://tome.app',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Slides', 'Storytelling', 'Decks'],
    rating: 4.5
  },
  {
    id: 'google-slides-ai',
    title: 'Google Slides AI',
    description: 'Google Workspace\'s presentation builder integrated with Gemini to generate layouts, summary structures, bullet notes, and slide illustrations.',
    url: 'https://slides.google.com',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Slides', 'Gemini AI', 'Workspace', 'Google'],
    rating: 4.6
  },
  {
    id: 'pitch-ai',
    title: 'Pitch AI',
    description: 'Collaborative presentation platform for modern teams with AI pitch deck generation, live analytics, and custom template systems.',
    url: 'https://pitch.com',
    category: 'ai',
    subcategory: 'slides',
    tags: ['Pitch Decks', 'Collaborative', 'Decks'],
    rating: 4.7
  },

  // --- Diagrams & Elements ---
  {
    id: 'napkin-ai',
    title: 'Napkin AI',
    description: 'Text-to-visual tool. Write your thoughts or paste document copy and watch AI instantly draw matching diagrams, flowcharts, and elements.',
    url: 'https://www.napkin.ai',
    category: 'ai',
    subcategory: 'diagrams',
    tags: ['Visuals', 'Diagrams', 'Flowcharts', 'Elements'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'drawio-ai',
    title: 'Draw.io AI',
    description: 'Draw.io diagramming utility with automated smart visual creation extensions for UML, network topologies, and structural graphs.',
    url: 'https://draw.io',
    category: 'ai',
    subcategory: 'diagrams',
    tags: ['Diagrams', 'Flowcharts', 'Open Source'],
    rating: 4.6
  },
  {
    id: 'eraser',
    title: 'Eraser.io (DiagramGPT)',
    description: 'Write markdown definitions or prompts to compile clean architecture diagrams, database schemas, flowcharts, and sequence maps.',
    url: 'https://www.eraser.io',
    category: 'ai',
    subcategory: 'diagrams',
    tags: ['Architecture Diagrams', 'DiagramGPT', 'Markdown'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'mermaid-chart',
    title: 'Mermaid Chart',
    description: 'AI-assisted visualizer for Mermaid diagrams. Generate, customize, and edit flowcharts, pie charts, and gantt layouts via chat prompts.',
    url: 'https://www.mermaidchart.com',
    category: 'ai',
    subcategory: 'diagrams',
    tags: ['Visual Charts', 'MermaidJS', 'Diagrams'],
    rating: 4.7
  },
  {
    id: 'whimsical-ai',
    title: 'Whimsical AI',
    description: 'AI-powered visual workspace for generating mind maps, flowcharts, user sequence maps, and wireframe ideation boards.',
    url: 'https://whimsical.com',
    category: 'ai',
    subcategory: 'diagrams',
    tags: ['Mind Maps', 'Flowcharts', 'Visual Boards'],
    rating: 4.7
  },

  // --- UI/UX & Design ---
  {
    id: 'uizard',
    title: 'Uizard',
    description: 'AI-powered UI design tool. Design landing pages, mobile apps, and wireframes from text prompts, sketches, or screenshots.',
    url: 'https://uizard.io',
    category: 'ai',
    subcategory: 'uiux',
    tags: ['UI/UX', 'Wireframes', 'Prototyping', 'App Design'],
    isHot: true,
    rating: 4.7
  },
  {
    id: 'galileo',
    title: 'Galileo AI',
    description: 'Generates UI/UX designs instantly from a text prompt. Creates high-fidelity screen UI components directly editable in Figma.',
    url: 'https://www.usegalileo.ai',
    category: 'ai',
    subcategory: 'uiux',
    tags: ['UI/UX', 'Figma', 'High Fidelity'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'visily',
    title: 'Visily AI',
    description: 'AI visual wireframe builder that helps developers sketch layout wireframes, translate screenshots, and test UX structures.',
    url: 'https://www.visily.ai',
    category: 'ai',
    subcategory: 'uiux',
    tags: ['UI/UX', 'Wireframes', 'Layouts'],
    rating: 4.5
  },
  {
    id: 'phind-design',
    title: 'Stitch AI',
    description: 'UI prototyping framework that analyzes interface screenshots and designs, exporting component layouts for codebases.',
    url: 'https://stitch.design',
    category: 'ai',
    subcategory: 'uiux',
    tags: ['Prototyping', 'Component layouts', 'UI/UX'],
    rating: 4.4
  },
  {
    id: 'locofy',
    title: 'Locofy.ai',
    description: 'AI design-to-code platform. Converts Figma and Adobe XD prototypes into production-grade React, Vue, and React Native code.',
    url: 'https://www.locofy.ai',
    category: 'ai',
    subcategory: 'uiux',
    tags: ['Design to Code', 'Figma to React', 'Frontend UI'],
    rating: 4.8
  },

  // --- Prompt to App/Web ---
  {
    id: 'lovable',
    title: 'Lovable.dev',
    description: 'Full stack prompt-to-app platform. Build production-grade, highly-dynamic web applications with complete database integrations in minutes.',
    url: 'https://lovable.dev',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['App Builder', 'Full Stack', 'Database', 'No-code'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    description: 'Web-based developer sandbox. Prompt, edit, compile, and run full-stack React, Node, or Vite apps inside a web browser container.',
    url: 'https://bolt.new',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['App Builder', 'Vite Sandbox', 'Web Container'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'v0-builder',
    title: 'v0.dev UI Builder',
    description: 'Vercel\'s UI generator. Prompt front-end interfaces, install component layers, and deploy React UI direct from instructions.',
    url: 'https://v0.dev',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['React Builder', 'shadcn/ui', 'Vercel'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'replit-agent',
    title: 'Replit Agent',
    description: 'Interactive coding agent inside Replit that creates full web applications, manages backend hosting, and runs database migrations.',
    url: 'https://replit.com',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['IDE Agent', 'Full Stack', 'Cloud Hosting'],
    rating: 4.8
  },
  {
    id: 'websim',
    title: 'Websim.ai',
    description: 'Interactive sandbox. Enter any URL or topic prompt to simulate and build functional websites, retro games, and dynamic pages instantly.',
    url: 'https://websim.ai',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['Simulation', 'Sandbox', 'Generative Sites'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'create-xyz',
    title: 'Create.xyz',
    description: 'Generative builder that converts natural language instructions into fully interactive web pages, widgets, and dynamic tools.',
    url: 'https://www.create.xyz',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['App Builder', 'No-code', 'Interactive Components'],
    isHot: true,
    rating: 4.7
  },
  {
    id: 'tempolabs',
    title: 'Tempo Labs',
    description: 'Prompt-to-React visual builder that generates layout components, handles styling variables, and exports direct clean code.',
    url: 'https://www.tempolabs.ai',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['React UI', 'Visual Builder', 'Clean Code'],
    rating: 4.6
  },
  {
    id: 'marblism',
    title: 'Marblism',
    description: 'Prompt to full-stack web application. Describe your product idea and get a fully integrated React frontend and Node backend codebase.',
    url: 'https://www.marblism.com',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['Full Stack', 'App Boilerplate', 'Database'],
    rating: 4.7
  },
  {
    id: 'devin-ai',
    title: 'Devin AI',
    description: 'The world\'s first fully autonomous AI software engineer. Prompts engineering tasks, writes complete codebases, debugs systems, and deploys applications.',
    url: 'https://devin.ai',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['Autonomous Agent', 'Software Engineer', 'App Builder'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'framer-ai',
    title: 'Framer AI',
    description: 'Generative designer that translates text descriptions into complete, styled, responsive multi-page marketing websites with editable visuals.',
    url: 'https://framer.com',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['Website Builder', 'No-code', 'UI Design', 'Framer'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'dora-ai',
    title: 'Dora AI',
    description: 'Create interactive, complex web interfaces and 3D animations from text prompts, fully editable via a visual canvas editor.',
    url: 'https://dora.run',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['3D Web', 'Website Builder', 'Animations', 'Interactive'],
    isHot: true,
    rating: 4.8
  },

  // --- APIs & Model Hubs ---
  {
    id: 'google-ai-studio',
    title: 'Google AI Studio',
    description: 'Google\'s fast prototyping platform for building, hosting, and running web apps and model prompts powered by Gemini AI.',
    url: 'https://aistudio.google.com',
    category: 'ai',
    subcategory: 'appbuilder',
    tags: ['App Builder', 'Gemini API', 'Prototyping', 'Google'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'huggingface',
    title: 'Hugging Face',
    description: 'The platform where the machine learning community collaborates on models, datasets, and applications. Host open source spaces.',
    url: 'https://huggingface.co',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['Model Hub', 'Open Source', 'Datasets', 'Spaces'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'openrouter',
    title: 'OpenRouter',
    description: 'Unified API router for LLMs. Access any proprietary or open-weights model using a standardized API payload format.',
    url: 'https://openrouter.ai',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['LLM Router', 'Developer API', 'Multi-model'],
    rating: 4.8
  },
  {
    id: 'replicate',
    title: 'Replicate',
    description: 'Run machine learning models in the cloud with a simple API request. Run image generators, voice changers, and LLMs in production.',
    url: 'https://replicate.com',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['Cloud API', 'Model Running', 'Dev Platform'],
    rating: 4.7
  },
  {
    id: 'ollama',
    title: 'Ollama',
    description: 'Get up and running with large language models locally. Run Llama 3, Mistral, and DeepSeek on Windows, macOS, and Linux.',
    url: 'https://ollama.com',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['Local LLMs', 'CLI', 'Offline AI', 'Open Source'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'lm-studio',
    title: 'LM Studio',
    description: 'Desktop application that allows developers to discover, download, and run local open-source LLMs offline with a local inference server.',
    url: 'https://lmstudio.ai',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['Local LLMs', 'Desktop App', 'Offline AI'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'together-ai',
    title: 'Together AI',
    description: 'Cloud platform for running, fine-tuning, and building with open-source AI models at lightning speed.',
    url: 'https://www.together.ai',
    category: 'ai',
    subcategory: 'devplatform',
    tags: ['Inference API', 'Open Source', 'Fine Tuning'],
    rating: 4.7
  },

  // --- Video Gen ---
  {
    id: 'runway',
    title: 'Runway Gen-3',
    description: 'State-of-the-art text-to-video and image-to-video generation tool offering cinema-grade control, motion, and visual clarity.',
    url: 'https://runwayml.com',
    category: 'ai',
    subcategory: 'video',
    tags: ['Video Gen', 'Gen-3', 'Text-to-Video'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'luma-dream',
    title: 'Luma Dream Machine',
    description: 'High-speed cinematic video generator that builds hyper-realistic, fluid scenes, and motions from text or image prompts.',
    url: 'https://lumalabs.ai/dream-machine',
    category: 'ai',
    subcategory: 'video',
    tags: ['Video Gen', 'Cinematic', 'Luma Labs'],
    isHot: true,
    rating: 4.7
  },
  {
    id: 'kling',
    title: 'Kling AI',
    description: 'Advanced video synthesis model. Generates high-definition cinematic video sequences, simulating realistic physical interactions.',
    url: 'https://klingai.com',
    category: 'ai',
    subcategory: 'video',
    tags: ['Video Gen', 'Physics Simulation', 'HD'],
    rating: 4.7
  },
  {
    id: 'pika',
    title: 'Pika Art',
    description: 'Creative video editor and generation tool. Features special effects, video styling, sound effects sync, and element extensions.',
    url: 'https://pika.art',
    category: 'ai',
    subcategory: 'video',
    tags: ['Video Gen', 'Sound Effects', 'Cartoon Styles'],
    rating: 4.5
  },
  {
    id: 'haiper-ai',
    title: 'Haiper AI',
    description: 'Perceptual AI video creation model focused on generating motion clips, animated avatars, and visual video effects.',
    url: 'https://haiper.ai',
    category: 'ai',
    subcategory: 'video',
    tags: ['Video Gen', 'Motion', 'Animation'],
    rating: 4.6
  },

  // --- Image Gen ---
  {
    id: 'midjourney',
    title: 'Midjourney',
    description: 'The world\'s most popular and artistic AI image generator. Creates photorealistic renders, artwork, and design assets.',
    url: 'https://www.midjourney.com',
    category: 'ai',
    subcategory: 'image',
    tags: ['Image Gen', 'Art', 'Photorealism'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'flux',
    title: 'Flux.1 (Black Forest)',
    description: 'Open-weights image generation model series. Highly specialized in text rendering, fingers/hands anatomy, and composition.',
    url: 'https://blackforestlabs.ai',
    category: 'ai',
    subcategory: 'image',
    tags: ['Image Gen', 'Open Weights', 'Text in Image'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'recraft',
    title: 'Recraft AI',
    description: 'Artistic designer generator. Generate vector illustrations, SVG brand graphics, custom icons, and color-matched design assets.',
    url: 'https://www.recraft.ai',
    category: 'ai',
    subcategory: 'image',
    tags: ['Vector Gen', 'SVG Design', 'Brand assets'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'stability-diffusion',
    title: 'Stable Diffusion',
    description: 'Open-source, customizable image synthesis tool, supporting custom model checkpoints, controlnets, and localized training.',
    url: 'https://stability.ai',
    category: 'ai',
    subcategory: 'image',
    tags: ['Image Gen', 'Open Source', 'ControlNet'],
    rating: 4.7
  },
  {
    id: 'leonardo-ai',
    title: 'Leonardo.ai',
    description: 'Generative AI content creation suite for artists and developers. Creates game assets, concept art, and photorealistic graphics.',
    url: 'https://leonardo.ai',
    category: 'ai',
    subcategory: 'image',
    tags: ['Game Assets', 'Concept Art', 'Image Gen'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'adobe-firefly',
    title: 'Adobe Firefly',
    description: 'Commercial-safe generative AI built into Photoshop and Illustrator for text-to-image, vector synthesis, and generative fill.',
    url: 'https://firefly.adobe.com',
    category: 'ai',
    subcategory: 'image',
    tags: ['Commercial Safe', 'Adobe', 'Generative Fill'],
    rating: 4.7
  },

  // --- Audio & Voice ---
  {
    id: 'elevenlabs',
    title: 'ElevenLabs',
    description: 'Hyper-realistic, natural voice generation. Offers text-to-speech, voice cloning, sound effect synthesis, and multilingual dubbing.',
    url: 'https://elevenlabs.io',
    category: 'ai',
    subcategory: 'audio',
    tags: ['Audio Gen', 'Text-to-Speech', 'Voice Clone'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'suno',
    title: 'Suno AI',
    description: 'Generate full songs, vocal lyrics, instrumentation, and melodies in any genre or style from simple text descriptors.',
    url: 'https://suno.com',
    category: 'ai',
    subcategory: 'audio',
    tags: ['Music Gen', 'Lyrics', 'Melodies'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'udio',
    title: 'Udio Music',
    description: 'State-of-the-art music generator that outputs full high-fidelity songs, vocal harmonies, and instrumentals in seconds.',
    url: 'https://www.udio.com',
    category: 'ai',
    subcategory: 'audio',
    tags: ['Music Gen', 'Vocals', 'HD Audio'],
    rating: 4.8
  },
  {
    id: 'play-ht',
    title: 'Play.ht',
    description: 'Conversational AI voice generator with ultra-realistic text-to-speech models and low-latency voice APIs for developers.',
    url: 'https://play.ht',
    category: 'ai',
    subcategory: 'audio',
    tags: ['Text to Speech', 'Voice API', 'Conversational AI'],
    rating: 4.7
  },

  // ================= FREE RESOURCES =================

  // --- Free Databases ---
  {
    id: 'free-firebase',
    title: 'Firebase Spark Plan',
    description: 'Google\'s famous free tier: Includes 10GB Hosting Storage, unlimited custom domain SSL, 50,000 Firestore reads/day, 20,000 writes/day, Authentication, and Cloud Storage free forever.',
    url: 'https://firebase.google.com',
    category: 'free',
    subcategory: 'database',
    subcategories: ['database', 'hosting', 'freedev'],
    tags: ['100% Free Tier', 'Firestore', 'Auth', 'Unlimited SSL', 'Google'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-appwrite',
    title: 'Appwrite Cloud Free',
    description: 'Open-source Firebase alternative providing free backend-as-a-service databases, user auth, storage buckets, and serverless functions.',
    url: 'https://appwrite.io',
    category: 'free',
    subcategory: 'database',
    subcategories: ['database', 'hosting', 'freedev'],
    tags: ['Free Backend', 'Open Source', 'Auth', 'Database'],
    rating: 4.8
  },
  {
    id: 'free-supabase',
    title: 'Supabase Free Tier',
    description: 'Generous free PostgreSQL database with built-in authentication, realtime websockets, edge functions, and 500MB storage.',
    url: 'https://supabase.com',
    category: 'free',
    subcategory: 'database',
    subcategories: ['database', 'hosting', 'freedev'],
    tags: ['Free Postgres', 'Auth', 'Realtime', 'Database'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-neon',
    title: 'Neon PostgreSQL Free',
    description: 'Serverless Postgres database with instant git-like database branching, autoscaling, and 0.5 GiB free storage forever.',
    url: 'https://neon.tech',
    category: 'free',
    subcategory: 'database',
    tags: ['Free Postgres', 'Serverless', 'Branching'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-turso',
    title: 'Turso SQLite Free',
    description: 'Edge-hosted SQLite database built on libSQL. Includes 9GB total storage and 1 billion read requests per month for free.',
    url: 'https://turso.tech',
    category: 'free',
    subcategory: 'database',
    tags: ['Free SQLite', 'Edge DB', '9GB Free'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-mongodb',
    title: 'MongoDB Atlas Free',
    description: 'Cloud NoSQL document database offering a shared M0 cluster with 512MB storage free forever for learning and prototyping.',
    url: 'https://www.mongodb.com/cloud/atlas',
    category: 'free',
    subcategory: 'database',
    tags: ['Free NoSQL', 'Document DB', 'MongoDB'],
    rating: 4.7
  },
  {
    id: 'free-upstash',
    title: 'Upstash Redis Free',
    description: 'Serverless Redis and Vector database for caching and rate limiting. Free tier includes 10,000 requests per day forever.',
    url: 'https://upstash.com',
    category: 'free',
    subcategory: 'database',
    tags: ['Free Redis', 'Vector DB', 'Serverless'],
    rating: 4.8
  },

  // --- Free Hosting ---
  {
    id: 'free-vercel',
    title: 'Vercel Hobby Plan',
    description: 'Instant global edge hosting for Next.js, React, and frontend apps with free custom domains, automatic SSL, and CI/CD.',
    url: 'https://vercel.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Hosting', 'Next.js', 'Global Edge', 'SSL'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-netlify',
    title: 'Netlify Free Tier',
    description: 'Continuous web deployment, static site hosting, serverless functions, and custom form handling with free custom SSL domains.',
    url: 'https://www.netlify.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Hosting', 'JAMstack', 'Serverless'],
    rating: 4.8
  },
  {
    id: 'free-cloudflare-pages',
    title: 'Cloudflare Pages Free',
    description: 'Unlimited bandwidth static site hosting powered by Cloudflare\'s hyper-fast global edge network with free custom domains.',
    url: 'https://pages.cloudflare.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Hosting', 'Unlimited Bandwidth', 'Edge'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-render',
    title: 'Render Free Web Services',
    description: 'Free hosting for static sites, Node.js, Python, and Go web services with automated Git deployments and free SSL certificates.',
    url: 'https://render.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Hosting', 'Docker', 'Web Services'],
    rating: 4.7
  },
  {
    id: 'free-github-pages',
    title: 'GitHub Pages',
    description: '100% free static site hosting directly from your GitHub repository. Includes custom domain support and HTTPS enforcement.',
    url: 'https://pages.github.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['100% Free', 'GitHub', 'Static Hosting'],
    rating: 4.8
  },
  {
    id: 'free-oracle-cloud',
    title: 'Oracle Cloud Always Free',
    description: 'The most generous cloud computing free tier: Includes 4 ARM Ampere CPU cores, 24GB RAM, 200GB block storage, and 2 Autonomous Databases 100% free forever.',
    url: 'https://www.oracle.com/cloud/free/',
    category: 'free',
    subcategory: 'hosting',
    tags: ['24GB RAM Free', '4 CPU Cores', 'VPS Cloud', 'Always Free'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'free-stackblitz',
    title: 'StackBlitz & WebContainers',
    description: 'Full-stack Node.js environments running in your browser container. Free online web hosting, instant dev sandboxes, and package installations.',
    url: 'https://stackblitz.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Node Environment', 'WebContainers', 'In-Browser IDE'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-glitch',
    title: 'Glitch Free Tier',
    description: 'Instant Node.js server hosting and online collaborative code editor. Build, remix, and run full-stack apps with free public URLs.',
    url: 'https://glitch.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Node Server', 'Collaborative', 'Remix Apps'],
    rating: 4.7
  },

  // --- Free Domains & SSL ---
  {
    id: 'free-cloudflare-dns',
    title: 'Cloudflare Free DNS & SSL',
    description: 'Free global DNS resolution with unmetered DDoS protection, free edge SSL certificates, and web optimization rules.',
    url: 'https://www.cloudflare.com',
    category: 'free',
    subcategory: 'domains',
    tags: ['Free SSL', 'DNS Manager', 'Security', 'DDoS'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-github-pack',
    title: 'GitHub Student Pack',
    description: 'Free domain registration for 1 year, free SSL certificates, cloud credits, and over $200k in developer perks for students.',
    url: 'https://education.github.com/pack',
    category: 'free',
    subcategory: 'domains',
    tags: ['Free Domain', 'Student Perks', 'Dev Credits'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'free-duckdns',
    title: 'DuckDNS',
    description: '100% free Dynamic DNS service allowing developers to point custom duckdns.org subdomains to dynamic IP addresses.',
    url: 'http://www.duckdns.org',
    category: 'free',
    subcategory: 'domains',
    tags: ['100% Free', 'Dynamic DNS', 'Free Subdomains'],
    rating: 4.6
  },
  {
    id: 'free-letsencrypt',
    title: 'Let\'s Encrypt',
    description: 'Free, automated, and open certificate authority providing free TLS/SSL certificates to encrypt all public web servers.',
    url: 'https://letsencrypt.org',
    category: 'free',
    subcategory: 'domains',
    tags: ['100% Free', 'SSL Certificate', 'Security'],
    rating: 4.9
  },

  // --- Free AI & LLM APIs ---
  {
    id: 'free-groq-api',
    title: 'Groq Free API Tier',
    description: 'Ultra-fast LPU inference API providing free rate-limited access to open models like Llama 3.3, DeepSeek R1, and Mixtral.',
    url: 'https://console.groq.com',
    category: 'free',
    subcategory: 'llmapi',
    tags: ['Free AI API', 'Groq LPU', 'Ultra Fast', 'Llama 3'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-gemini-api',
    title: 'Google Gemini Free API',
    description: 'Free developer tier for Gemini 1.5 Flash and Pro models in Google AI Studio with up to 15 requests per minute free.',
    url: 'https://aistudio.google.com',
    category: 'free',
    subcategory: 'llmapi',
    tags: ['Free AI API', 'Google Gemini', 'Long Context'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-openrouter-api',
    title: 'OpenRouter Free Models',
    description: 'Access free open-weights models (DeepSeek, Llama, Qwen) via OpenRouter\'s unified API endpoint with zero cost.',
    url: 'https://openrouter.ai',
    category: 'free',
    subcategory: 'llmapi',
    tags: ['Free LLM API', 'Unified Endpoint', 'Open Weights'],
    rating: 4.8
  },
  {
    id: 'free-huggingface-api',
    title: 'Hugging Face Free Inference',
    description: 'Free serverless inference API allowing developers to make HTTP calls to thousands of open-source models on Hugging Face.',
    url: 'https://huggingface.co/inference-api',
    category: 'free',
    subcategory: 'llmapi',
    tags: ['Free Inference', 'Open Source', 'Model API'],
    rating: 4.8
  },

  // --- Free Dev Tools ---
  {
    id: 'free-ngrok',
    title: 'ngrok Free Tier',
    description: 'Instantly expose local development servers to the internet over secure tunnels with a free static ngrok domain.',
    url: 'https://ngrok.com',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Tunnel', 'Local Server', 'Public URL'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-cloudflare-tunnels',
    title: 'Cloudflare Tunnels',
    description: '100% free secure tunnel to connect local web services to Cloudflare without exposing public IP addresses or opening router ports.',
    url: 'https://www.cloudflare.com/products/tunnel',
    category: 'free',
    subcategory: 'freedev',
    tags: ['100% Free', 'Secure Tunnel', 'Cloudflare'],
    rating: 4.9
  },
  {
    id: 'free-sentry',
    title: 'Sentry Free Developer Plan',
    description: 'Real-time error tracking, stack trace debugging, and performance monitoring for up to 5,000 events/month free.',
    url: 'https://sentry.io',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Monitoring', 'Error Tracking', 'Debugging'],
    rating: 4.8
  },
  {
    id: 'free-resend',
    title: 'Resend Free Tier',
    description: 'Modern email sending API for developers offering 3,000 emails/month free with custom domain DKIM/SPF signing.',
    url: 'https://resend.com',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Email API', 'Transaction Emails', 'DKIM'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-clerk',
    title: 'Clerk Auth Free Tier',
    description: 'Complete user management, authentication, social log ins, and user profiles with up to 10,000 monthly active users 100% free.',
    url: 'https://clerk.com',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Auth', 'User Management', 'React Auth'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-posthog',
    title: 'PostHog Free Tier',
    description: 'Open-source product analytics, session recordings, feature flags, and A/B testing with 1 million events per month free.',
    url: 'https://posthog.com',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Analytics', 'Session Replay', 'Feature Flags'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-auth0',
    title: 'Auth0 Free Plan',
    description: 'Identity and access management platform offering universal login and authentication for up to 25,000 active users free.',
    url: 'https://auth0.com',
    category: 'free',
    subcategory: 'freedev',
    tags: ['Free Auth', 'Identity', 'SSO'],
    rating: 4.7
  },
  {
    id: 'free-koyeb',
    title: 'Koyeb Free Tier',
    description: 'Global serverless platform for deploying apps, Docker containers, and microservices with automatic SSL and global load balancing.',
    url: 'https://www.koyeb.com',
    category: 'free',
    subcategory: 'hosting',
    tags: ['Free Container', 'Docker', 'Serverless'],
    rating: 4.7
  },

  // --- Free UI Assets & Fonts ---
  {
    id: 'free-reactbits',
    title: 'React Bits Animated UI',
    description: '100% free open-source collection of animated background effects, text animations, interactive UI components, and copy-paste React code snippets.',
    url: 'https://reactbits.dev',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['100% Free UI', 'Animated Backgrounds', 'React Components', 'Copy-Paste Code'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'free-aceternity',
    title: 'Aceternity UI Components',
    description: 'Trending open-source library of copy-paste Tailwind CSS & Framer Motion animated components, 3D cards, and hero backgrounds.',
    url: 'https://ui.aceternity.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['100% Free UI', 'Tailwind CSS', 'Framer Motion', '3D Components'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'free-magicui',
    title: 'Magic UI Landing Page Components',
    description: '50+ free, open-source animated React components built with Tailwind CSS and Framer Motion for high-converting landing pages.',
    url: 'https://magicui.design',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['100% Free UI', 'Landing Pages', 'Animated Components', 'React'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-shadcn',
    title: 'shadcn/ui Component Library',
    description: 'Beautifully designed, accessible, copy-paste React components built with Radix UI and Tailwind CSS that you own 100%.',
    url: 'https://ui.shadcn.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Copy Paste UI', 'Tailwind', 'Radix UI', 'Open Source'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'free-uiverse',
    title: 'Uiverse.io Community UI',
    description: 'Community-crafted collection of 3,000+ free open-source CSS & HTML buttons, card animations, loaders, and toggle switches.',
    url: 'https://uiverse.io',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['3000+ Free UI', 'CSS Animations', 'Community Elements'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-hyperui',
    title: 'HyperUI Tailwind Components',
    description: 'Free open-source Tailwind CSS component collection for marketing web pages, e-commerce stores, and admin dashboards.',
    url: 'https://www.hyperui.dev',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['Free Tailwind UI', 'Marketing', 'Ecommerce'],
    rating: 4.7
  },
  {
    id: 'free-lucide',
    title: 'Lucide Icons',
    description: 'Beautiful & consistent open-source icon toolkit with over 1,000+ customizable vector icons for React, Vue, and plain web.',
    url: 'https://lucide.dev',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['1000+ Free Icons', 'Open Source', 'React Icons'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-simple-icons',
    title: 'Simple Icons Brand Vectors',
    description: 'Over 3,000 free SVG icons for popular brand logos, technology stacks, frameworks, and social media platforms.',
    url: 'https://simpleicons.org',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['3000+ Brand SVGs', 'Tech Logos', 'SVG Icons'],
    rating: 4.8
  },
  {
    id: 'free-originui',
    title: 'Origin UI Input Components',
    description: 'Beautiful, accessible copy-paste React & Tailwind CSS component primitives for inputs, select menus, sliders, and checkboxes.',
    url: 'https://originui.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Copy-Paste UI', 'React Primitives', 'Tailwind CSS'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-syntaxui',
    title: 'Syntax UI Components',
    description: 'Free open-source collection of modern Tailwind CSS & React components, button animations, glow cards, and modals.',
    url: 'https://syntaxui.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Animated UI', 'Tailwind', 'React Components'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-floatui',
    title: 'Float UI Components & Blocks',
    description: 'Free open-source Tailwind CSS & React components for hero sections, pricing tables, navigation bars, and footers.',
    url: 'https://floatui.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Free Blocks', 'Tailwind UI', 'React'],
    rating: 4.8
  },
  {
    id: 'free-cultui',
    title: 'Cult UI Motion Components',
    description: 'Open-source component library for building modern web apps with physics-based motion, spring animations, and micro-interactions.',
    url: 'https://cult-ui.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Spring Animations', 'Framer Motion', 'Copy Paste'],
    rating: 4.8
  },
  {
    id: 'free-bgjar',
    title: 'BgJar SVG Background Generator',
    description: 'Free SVG background generator to create glowing, animated, geometric, circuit, polygon, and wave background patterns.',
    url: 'https://bgjar.com',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'design'],
    tags: ['SVG Backgrounds', 'Generator', 'Free Design'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-heropatterns',
    title: 'Hero Patterns SVG Backgrounds',
    description: 'Collection of repeatable SVG background patterns for website headers, hero cards, and landing page backdrops.',
    url: 'https://heropatterns.com',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['SVG Patterns', 'Backgrounds', 'Free Vector'],
    rating: 4.7
  },
  {
    id: 'free-animatecss',
    title: 'Animate.css',
    description: 'Cross-browser library of ready-to-use CSS animations for text, modals, hover states, and smooth element transitions.',
    url: 'https://animate.style',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['CSS Animations', 'Transitions', 'Keyframes'],
    rating: 4.8
  },
  {
    id: 'free-hovercss',
    title: 'Hover.css Effects',
    description: 'Collection of CSS3 powered hover effects to apply to buttons, logos, icons, SVG shapes, and feature cards.',
    url: 'https://ianlunn.github.io/Hover/',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['Hover Effects', 'CSS3', 'Button Animations'],
    rating: 4.7
  },
  {
    id: 'free-sailboatui',
    title: 'Sailboat UI Components',
    description: '150+ open-source copy-paste Tailwind CSS components for building modern responsive web application interfaces.',
    url: 'https://sailboatui.com',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['150+ Components', 'Tailwind CSS', 'Open Source'],
    rating: 4.7
  },
  {
    id: 'free-fontshare',
    title: 'Fontshare Free Fonts',
    description: '100% free for commercial use typography directory featuring professional variable fonts by Indian Type Foundry.',
    url: 'https://fontshare.com',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['100% Free Fonts', 'Typography', 'Commercial Use'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-svgrepo',
    title: 'SVG Repo Free Vectors',
    description: 'Search, customize, and download over 500,000 free open-licensed vector assets and icons for commercial projects.',
    url: 'https://svgrepo.com',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['500k+ Free SVGs', 'Vector Icons', 'Commercial License'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-iconify',
    title: 'Iconify 200k+ Free Icons',
    description: 'Unified open-source icon framework with over 200,000 vector icons from FontAwesome, Material, and Lucide.',
    url: 'https://iconify.design',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['200k Free Icons', 'Open Source', 'Unified Framework'],
    rating: 4.8
  },
  {
    id: 'free-unsplash',
    title: 'Unsplash Free Photos',
    description: 'Over 3 million high-resolution, free-to-use photography assets contributed by a global community of photographers.',
    url: 'https://unsplash.com',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['Free Stock Photos', 'High Resolution', 'Commercial Free'],
    rating: 4.8
  },
  {
    id: 'free-tailwind-animated',
    title: 'Tailwind CSS Animated',
    description: 'Free open-source Tailwind CSS plugin featuring ready-to-use keyframe animations for fade, zoom, spin, bounce, and pulse effects.',
    url: 'https://www.tailwindcss-animated.com/',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Free UI Plugin', 'Tailwind CSS', 'Keyframe Animations'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-css-buttons',
    title: 'CSS Buttons Examples',
    description: 'Over 90+ free copy-paste CSS button styles from famous websites like Stripe, GitHub, Vercel, and Apple.',
    url: 'https://getcssscan.com/css-buttons-examples',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['Copy-Paste CSS', 'Button Styles', 'Free Elements'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'free-glassmorphism',
    title: 'Glassmorphism CSS Generator',
    description: 'Free interactive CSS glassmorphism generator to copy-paste frosted glass background blur and border styles.',
    url: 'https://glassmorphism.com/',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'design'],
    tags: ['Glassmorphism', 'CSS Generator', 'UI Design'],
    rating: 4.8
  },
  {
    id: 'free-lottiefiles',
    title: 'LottieFiles Free Animations',
    description: '100,000+ free lightweight Lottie vector animations for web, React, iOS, and Android landing page micro-interactions.',
    url: 'https://lottiefiles.com/free-animations',
    category: 'free',
    subcategory: 'freeassets',
    tags: ['Lottie', 'Vector Animations', 'Micro Interactions'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-headless-ui',
    title: 'Headless UI Primitives',
    description: 'Completely unstyled, fully accessible UI components by Tailwind Labs designed to integrate seamlessly with Tailwind CSS.',
    url: 'https://headlessui.com/',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Unstyled UI', 'Tailwind Labs', 'Accessible Components'],
    rating: 4.8
  },
  {
    id: 'free-radix-ui',
    title: 'Radix UI Primitives',
    description: 'Unstyled, accessible component primitives for building high-quality design systems and React web applications.',
    url: 'https://www.radix-ui.com/',
    category: 'free',
    subcategory: 'freeassets',
    subcategories: ['freeassets', 'libraries'],
    tags: ['Accessible Primitives', 'React', 'Design Systems'],
    rating: 4.9
  },

  // --- Free Headless CMS ---
  {
    id: 'free-sanity',
    title: 'Sanity.io Free Plan',
    description: 'Generous free headless CMS plan featuring real-time collaborative editing, GROQ/GraphQL queries, and 100k API requests/month.',
    url: 'https://www.sanity.io',
    category: 'free',
    subcategory: 'freecms',
    tags: ['Free Headless CMS', 'Structured Content', 'Realtime'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-contentful',
    title: 'Contentful Free Community',
    description: 'Free headless CMS plan for developers with up to 25,000 content records, 2 spaces, and multi-language support.',
    url: 'https://www.contentful.com',
    category: 'free',
    subcategory: 'freecms',
    tags: ['Free CMS', 'Headless Content', 'GraphQL'],
    rating: 4.7
  },
  {
    id: 'free-strapi',
    title: 'Strapi Open Source CMS',
    description: '100% open-source, customizable Node.js headless CMS that you can self-host on any free server or container without limit.',
    url: 'https://strapi.io',
    category: 'free',
    subcategory: 'freecms',
    tags: ['100% Free Self-Host', 'Open Source CMS', 'Node.js'],
    isHot: true,
    rating: 4.8
  },

  // --- Free Storage & CDN ---
  {
    id: 'free-cloudflare-r2',
    title: 'Cloudflare R2 Storage',
    description: 'S3-compatible cloud object storage with 10GB free storage per month and ZERO egress bandwidth fees free forever.',
    url: 'https://www.cloudflare.com/developer-platform/r2/',
    category: 'free',
    subcategory: 'freestorage',
    tags: ['10GB Free Storage', 'Zero Egress Fees', 'S3 Compatible'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'free-backblaze-b2',
    title: 'Backblaze B2 Free 10GB',
    description: 'Cloud object storage with 10GB storage free forever, fast S3-compatible APIs, and seamless CDN integrations.',
    url: 'https://www.backblaze.com/b2/cloud-storage.html',
    category: 'free',
    subcategory: 'freestorage',
    tags: ['10GB Free Storage', 'S3 API', 'Backup Storage'],
    rating: 4.8
  },
  {
    id: 'free-imagekit',
    title: 'ImageKit Free Plan',
    description: 'Real-time image & video optimization CDN with 20GB media bandwidth per month and automatic format transformation free.',
    url: 'https://imagekit.io',
    category: 'free',
    subcategory: 'freestorage',
    tags: ['Free Media CDN', 'Image Optimization', '20GB Bandwidth'],
    rating: 4.8
  },

  // ================= OTHER MAIN CATEGORIES =================
  
  // --- Websites & Communities ---
  {
    id: 'github',
    title: 'GitHub',
    description: 'The world\'s leading AI-powered developer platform to build, scale, secure, and host open-source and private repositories.',
    url: 'https://github.com',
    category: 'websites',
    tags: ['Git', 'Repositories', 'Collaboration'],
    rating: 4.9
  },
  {
    id: 'devto',
    title: 'Dev.to',
    description: 'A constructive and inclusive community for software developers to share articles, build portfolios, and discuss technology.',
    url: 'https://dev.to',
    category: 'websites',
    tags: ['Blog Platform', 'Community', 'Articles'],
    rating: 4.5
  },
  {
    id: 'producthunt',
    title: 'Product Hunt',
    description: 'A curation of the best new products launched daily. Excellent for discovering new AI tools, developer software, and SaaS startups.',
    url: 'https://producthunt.com',
    category: 'websites',
    tags: ['Product Launch', 'SaaS', 'Discovery'],
    rating: 4.6
  },
  {
    id: 'hackernews',
    title: 'Hacker News',
    description: 'Y Combinator\'s social news website focusing on computer science, entrepreneurship, technology, and interesting web findings.',
    url: 'https://news.ycombinator.com',
    category: 'websites',
    tags: ['News Aggregator', 'Tech', 'Startups'],
    rating: 4.4
  },
  {
    id: 'stackoverflow',
    title: 'Stack Overflow',
    description: 'The largest online community for programmers to learn, share their knowledge, and get answers to tough programming questions.',
    url: 'https://stackoverflow.com',
    category: 'websites',
    tags: ['Q&A', 'Community', 'Debugging'],
    rating: 4.7
  },
  {
    id: 'hashnode',
    title: 'Hashnode',
    description: 'Developer blogging platform that lets you publish articles on your own custom domain, mapping dev blogs directly to GitHub.',
    url: 'https://hashnode.com',
    category: 'websites',
    tags: ['Developer Blogging', 'Custom Domain', 'Articles'],
    rating: 4.6
  },
  {
    id: 'reddit-webdev',
    title: 'r/webdev',
    description: 'The largest online Reddit community dedicated to modern web development discussions, framework trends, and site showcases.',
    url: 'https://www.reddit.com/r/webdev/',
    category: 'websites',
    tags: ['Community', 'Web Development', 'Discussion'],
    rating: 4.5
  },
  {
    id: 'lobsters',
    title: 'Lobste.rs',
    description: 'Computing-focused link aggregation community centered around architecture, system design, and software engineering.',
    url: 'https://lobste.rs',
    category: 'websites',
    tags: ['Tech Aggregator', 'Systems', 'Architecture'],
    rating: 4.6
  },

  // --- Libraries & Frameworks ---
  {
    id: 'react',
    title: 'React.js',
    description: 'The library for web and native user interfaces. Build interfaces from individual pieces called components.',
    url: 'https://react.dev',
    category: 'libraries',
    subcategory: 'frontend',
    tags: ['Frontend', 'Components', 'Virtual DOM'],
    rating: 4.9
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'The React Framework for the Web. Enabling hybrid server-side rendering, static site generation, and server actions.',
    url: 'https://nextjs.org',
    category: 'libraries',
    subcategory: 'frontend',
    tags: ['SSR', 'React', 'Routing', 'Vercel'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'vue',
    title: 'Vue.js',
    description: 'The progressive JavaScript framework for building user interfaces. Approachable, performant, and versatile.',
    url: 'https://vuejs.org',
    category: 'libraries',
    subcategory: 'frontend',
    tags: ['Frontend', 'Reactive UI', 'Progressive'],
    rating: 4.8
  },
  {
    id: 'astro',
    title: 'Astro Web Framework',
    description: 'The web framework for content-driven websites. Delivers ultra-fast page loads with Islands Architecture and zero JS by default.',
    url: 'https://astro.build',
    category: 'libraries',
    subcategory: 'frontend',
    tags: ['Islands Architecture', 'Static Site', 'Performance'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'reactbits',
    title: 'React Bits Animated UI',
    description: '100% free open-source library of pre-built animated background effects, text animations, interactive UI components, and copy-paste React code snippets.',
    url: 'https://reactbits.dev',
    category: 'libraries',
    subcategory: 'uicomponents',
    subcategories: ['uicomponents', 'freeassets'],
    tags: ['100% Free', 'Animated Backgrounds', 'React Components', 'Copy-Paste Code'],
    isHot: true,
    rating: 5.0
  },
  {
    id: 'shadcnui',
    title: 'shadcn/ui',
    description: 'Beautifully designed copy-paste components built with Radix UI and Tailwind CSS that you own and customize 100%.',
    url: 'https://ui.shadcn.com',
    category: 'libraries',
    subcategory: 'uicomponents',
    subcategories: ['uicomponents', 'freeassets'],
    tags: ['Components', 'Design System', 'Radix UI'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'hono',
    title: 'Hono Web Framework',
    description: 'Ultra-fast, lightweight, web framework built for Cloudflare Workers, Deno, Bun, and Node.js with strong TypeScript support.',
    url: 'https://hono.dev',
    category: 'libraries',
    subcategory: 'backend',
    tags: ['Ultra Fast', 'Cloudflare Workers', 'TypeScript', 'Backend'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'nestjs',
    title: 'NestJS Framework',
    description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side enterprise applications.',
    url: 'https://nestjs.com',
    category: 'libraries',
    subcategory: 'backend',
    tags: ['Node.js Framework', 'TypeScript', 'Enterprise', 'Backend'],
    rating: 4.8
  },
  {
    id: 'express',
    title: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js powering backend APIs and microservices globally.',
    url: 'https://expressjs.com',
    category: 'libraries',
    subcategory: 'backend',
    tags: ['Node.js', 'REST API', 'Backend'],
    rating: 4.7
  },
  {
    id: 'prisma',
    title: 'Prisma ORM',
    description: 'Next-generation Node.js and TypeScript ORM for databases. Provides type-safe database queries and migrations.',
    url: 'https://www.prisma.io',
    category: 'libraries',
    subcategory: 'backend',
    tags: ['Database', 'ORM', 'TypeScript', 'Backend'],
    rating: 4.7
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
    url: 'https://tailwindcss.com',
    category: 'libraries',
    subcategory: 'styling',
    tags: ['Styling', 'CSS Modules', 'Responsive'],
    rating: 4.8
  },
  {
    id: 'framer-motion',
    title: 'Framer Motion',
    description: 'A production-ready motion library for React. Supercharge components with high-performance gestures and spring physics animations.',
    url: 'https://motion.dev',
    category: 'libraries',
    subcategory: 'styling',
    tags: ['Animations', 'React', 'Motion Physics'],
    isHot: true,
    rating: 4.7
  },
  {
    id: 'tanstack-query',
    title: 'TanStack Query (React Query)',
    description: 'Powerful asynchronous state management, server-state caching, optimistic updates, and auto-refetching for React & TS.',
    url: 'https://tanstack.com/query',
    category: 'libraries',
    subcategory: 'stateapi',
    tags: ['Async State', 'React Query', 'Data Fetching', 'Caching'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'zustand',
    title: 'Zustand State Management',
    description: 'Small, fast, and scalable state-management solution for React using simplified flux principles without boilerplate.',
    url: 'https://zustand-demo.pmnd.rs',
    category: 'libraries',
    subcategory: 'stateapi',
    tags: ['State Management', 'React', 'Lightweight'],
    rating: 4.8
  },

  // --- UI & Design ---
  {
    id: 'figma',
    title: 'Figma',
    description: 'Leading collaborative web application for interface design, vector graphics editing, and interactive prototyping.',
    url: 'https://figma.com',
    category: 'design',
    tags: ['UI Design', 'Prototyping', 'Vector'],
    rating: 4.9
  },
  {
    id: 'fontshare',
    title: 'Fontshare',
    description: 'A free-for-commercial-use fonts service launched by Indian Type Foundry (ITF) with exceptional variable fonts.',
    url: 'https://fontshare.com',
    category: 'design',
    tags: ['Typography', 'Fonts', 'Variable Fonts'],
    isHot: true,
    rating: 4.7
  },
  {
    id: 'google-fonts',
    title: 'Google Fonts',
    description: 'Library of open source designer web fonts and interactive directory for browsing and custom styling typography.',
    url: 'https://fonts.google.com',
    category: 'design',
    tags: ['Typography', 'Free Fonts', 'Icons'],
    rating: 4.8
  },
  {
    id: 'coolors',
    title: 'Coolors',
    description: 'The super-fast color palettes generator! Create, save and share perfect palettes for your developer projects in seconds.',
    url: 'https://coolors.co',
    category: 'design',
    tags: ['Colors', 'Palette Generator', 'Aesthetics'],
    rating: 4.6
  },
  {
    id: 'svgrepo',
    title: 'SVG Repo',
    description: 'Browse, search and download vectors and icons from a massive repository of open-license SVG assets.',
    url: 'https://svgrepo.com',
    category: 'design',
    tags: ['SVGs', 'Icons', 'Vector Assets'],
    rating: 4.8
  },
  {
    id: 'dribbble',
    title: 'Dribbble',
    description: 'The leading destination for design inspiration, shot showcases, UI/UX concept art, and creative visual work.',
    url: 'https://dribbble.com',
    category: 'design',
    tags: ['UI Inspiration', 'Design Gallery', 'Showcase'],
    rating: 4.6
  },
  {
    id: 'unsplash',
    title: 'Unsplash',
    description: 'Massive library of high-resolution royalty-free imagery and photography for web designs and background layouts.',
    url: 'https://unsplash.com',
    category: 'design',
    tags: ['Free Photos', 'Design Assets', 'Stock Images'],
    rating: 4.8
  },
  {
    id: 'iconify',
    title: 'Iconify',
    description: 'Unified vector icon framework containing over 200,000 icons from popular sets (FontAwesome, Material, Feather).',
    url: 'https://iconify.design',
    category: 'design',
    tags: ['Icon Sets', 'Vector Icons', 'Unified API'],
    rating: 4.7
  },

  // --- Learning & Docs ---
  {
    id: 'mdn',
    title: 'MDN Web Docs',
    description: 'Mozilla Developer Network offers the most trusted, up-to-date documentation on HTML, CSS, JavaScript, and Web APIs.',
    url: 'https://developer.mozilla.org',
    category: 'learning',
    tags: ['Reference', 'HTML/CSS', 'JavaScript'],
    rating: 4.9
  },
  {
    id: 'javascriptinfo',
    title: 'JavaScript.info',
    description: 'The Modern JavaScript Tutorial. Deep explanations from basics up to advanced concepts like closures and web components.',
    url: 'https://javascript.info',
    category: 'learning',
    tags: ['Tutorials', 'JavaScript', 'Deep Dive'],
    rating: 4.8
  },
  {
    id: 'css-tricks',
    title: 'CSS-Tricks',
    description: 'A website dedicated to teaching CSS, web design, and front-end development through comprehensive guides and articles.',
    url: 'https://css-tricks.com',
    category: 'learning',
    tags: ['CSS', 'Responsive Layouts', 'Guides'],
    rating: 4.5
  },
  {
    id: 'frontend-mentor',
    title: 'Frontend Mentor',
    description: 'Improve your front-end coding skills by building real-world projects. Solve HTML, CSS and JS challenges with design mocks.',
    url: 'https://frontendmentor.io',
    category: 'learning',
    tags: ['Challenges', 'Project Based', 'Design Practice'],
    rating: 4.6
  },
  {
    id: 'roadmap-sh',
    title: 'Roadmap.sh',
    description: 'Community-created developer roadmaps, interactive learning paths, and guides for frontend, backend, DevOps, and AI.',
    url: 'https://roadmap.sh',
    category: 'learning',
    tags: ['Career Roadmaps', 'Learning Paths', 'Guides'],
    isHot: true,
    rating: 4.9
  },
  {
    id: 'web-dev',
    title: 'Web.dev',
    description: 'Google\'s Web Guidance. Modern web performance metrics (Core Web Vitals), PWA specs, and web accessibility standards.',
    url: 'https://web.dev',
    category: 'learning',
    tags: ['Web Performance', 'Google Docs', 'Best Practices'],
    rating: 4.8
  },
  {
    id: 'typescript-handbook',
    title: 'TypeScript Handbook',
    description: 'Official comprehensive reference manual and guide to mastering type system syntax and compiler configuration in TypeScript.',
    url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    category: 'learning',
    tags: ['TypeScript', 'Official Handbook', 'Type System'],
    rating: 4.9
  },

  // --- Utilities ---
  {
    id: 'caniuse',
    title: 'Can I Use',
    description: 'Up-to-date browser compatibility tables for support of modern web technologies on desktop and mobile browsers.',
    url: 'https://caniuse.com',
    category: 'utilities',
    tags: ['Compatibility', 'Specs', 'Mobile/Desktop'],
    rating: 4.8
  },
  {
    id: 'bundlephobia',
    title: 'Bundlephobia',
    description: 'Find the performance cost of adding an npm package to your bundle. Upload your bundle or search library packages.',
    url: 'https://bundlephobia.com',
    category: 'utilities',
    tags: ['Bundle Size', 'npm Check', 'Performance'],
    rating: 4.7
  },
  {
    id: 'tinypng',
    title: 'TinyPNG',
    description: 'Smart lossy compression algorithm that dramatically reduces the file size of WebP, PNG, and JPEG files with zero visible loss.',
    url: 'https://tinypng.com',
    category: 'utilities',
    tags: ['Image Compression', 'Optimization', 'Web Speed'],
    rating: 4.8
  },
  {
    id: 'carbon',
    title: 'Carbon Code Tool',
    description: 'Create and share beautiful source code images. Custom color schemes, border frames, shadows, and language syntax highlight.',
    url: 'https://carbon.now.sh',
    category: 'utilities',
    tags: ['Code Snippets', 'Images', 'Sharing'],
    rating: 4.6
  },
  {
    id: 'regex101',
    title: 'Regex101',
    description: 'Online regex tester, debugger, and code generator for PHP, PCRE, Python, Golang, and JavaScript with complete syntax analysis.',
    url: 'https://regex101.com',
    category: 'utilities',
    tags: ['Regex Tester', 'Debugging', 'Syntax Help'],
    rating: 4.9
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description: 'Clean formatting, payload validation, tree visualization, and structural conversion tools for JSON payloads.',
    url: 'https://jsonformatter.org',
    category: 'utilities',
    tags: ['JSON Formatter', 'Payload Inspector', 'Validation'],
    rating: 4.7
  },
  {
    id: 'ray-so',
    title: 'Ray.so',
    description: 'Generate beautiful code snippet screenshots with custom dark background gradients, syntax highlighting, and padding.',
    url: 'https://ray.so',
    category: 'utilities',
    tags: ['Code Snippets', 'Design Tools', 'Vercel'],
    isHot: true,
    rating: 4.8
  },
  {
    id: 'transform-tools',
    title: 'Transform.tools',
    description: 'Polyglot web converter for HTML to JSX, JSON to TS interfaces, SVG to React components, and CSS to JS objects.',
    url: 'https://transform.tools',
    category: 'utilities',
    tags: ['Code Converters', 'HTML to JSX', 'JSON to TS'],
    rating: 4.8
  }
];
