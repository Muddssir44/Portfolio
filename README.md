# Muhammad Muddassir - AI/ML Engineer Portfolio

A modern, elegant portfolio website showcasing expertise in AI/ML engineering, full-stack development, and cutting-edge technologies.

## 🚀 Features

### AI/ML Expertise
- **Custom LLM Workflows**: Design and implement tailored Large Language Model solutions
- **Chatbot Creation**: Build intelligent, context-aware conversational AI
- **AI Agents & Automation**: Develop autonomous agents for complex tasks
- **MCP Servers**: Implement Model Context Protocol servers for AI deployment
- **RAG Systems**: Build Retrieval-Augmented Generation systems
- **GPT-4 Integration**: Seamless AI model integration into applications

### Design & UX
- ✨ Advanced animations with Framer Motion
- 🎨 Modern glass morphism effects
- 🌓 Dark/Light mode support with theme persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Smooth scroll navigation
- ⚡ Performance optimized

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui with Radix UI
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Muddssir44/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🏗️ Build for Production

To build the application for production:

```bash
npm run build
```

This will create optimized production files in the `dist` directory.

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

2. Go to your repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Push your changes to the main branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist/public"
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Portfolio page
│   │   ├── lib/           # Utilities
│   │   └── index.css      # Global styles & animations
│   └── index.html
├── server/                # Backend Express server
├── attached_assets/       # Resume and images
└── shared/               # Shared types and schemas
```

## ✨ Key Sections

1. **Hero Section**: Dynamic typing animation with AI/ML role titles
2. **About**: Professional summary highlighting AI/ML expertise
3. **AI/ML Expertise**: Comprehensive showcase of AI capabilities
   - Custom LLM Workflows
   - Chatbot Creation
   - AI Agents & Automation
   - MCP Servers
   - RAG Systems
   - GPT-4 Integration
4. **Experience**: Professional work history
5. **Projects**: Featured portfolio projects
6. **Skills**: Technical skills with progress bars
   - AI/ML & LLM Technologies
   - Frontend Development
   - Backend & .NET
   - AI/ML Tools & Frameworks
7. **Education & Certifications**
8. **Contact**: Multiple contact methods

## 🎨 Custom Animations

- Floating profile image
- Typing effect for role titles
- Scroll-triggered fade-in animations
- Skill bar progress animations
- Gradient text effects
- Glass morphism cards
- Hover and active state effects

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Muhammad Muddassir**
- GitHub: [@Muddssir44](https://github.com/Muddssir44)
- LinkedIn: [Muhammad Muddassir](https://www.linkedin.com/in/muhammad-muddassir-316556269/)
- Email: muddassirmuhammad371@gmail.com

## 🙏 Acknowledgments

- Built with React and TypeScript
- UI components from Shadcn/ui
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Note**: This portfolio is now optimized for showcasing AI/ML expertise and is ready for GitHub Pages deployment!

