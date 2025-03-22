import React, { useEffect } from 'react';
import { Github, Menu, X, Search, ArrowRight, ChevronRight, Terminal, Zap, Shield, Sparkles } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeExample = `import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/mark.svg" alt="" />
          </a>
        </div>
      </nav>
    </header>
  )
}`;

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/50 backdrop-blur z-50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-sky-400" viewBox="0 0 50 31" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38BDF8" />
              </svg>
              <span className="ml-3 text-xl font-bold text-white">Tailwind CSS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-slate-400 hover:text-slate-200 flex items-center space-x-2 group"
              >
                <Search className="w-5 h-5" />
                <span>Quick search...</span>
                <span className="hidden lg:inline text-slate-600 group-hover:text-slate-500">⌘K</span>
              </button>
              <a href="#" className="text-slate-400 hover:text-slate-200">Docs</a>
              <a href="#" className="text-slate-400 hover:text-slate-200">Components</a>
              <a href="#" className="text-slate-400 hover:text-slate-200">Blog</a>
              <a href="https://github.com/tailwindlabs/tailwindcss" 
                 className="text-slate-400 hover:text-slate-200"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors">
                Get started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-slate-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-b border-slate-800">
              <a href="#" className="block px-3 py-2 text-slate-400 hover:text-slate-200">Docs</a>
              <a href="#" className="block px-3 py-2 text-slate-400 hover:text-slate-200">Components</a>
              <a href="#" className="block px-3 py-2 text-slate-400 hover:text-slate-200">Blog</a>
              <button className="w-full mt-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors">
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-40 pb-20 lg:pb-32">
        <div className="absolute inset-0 bottom-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8">
              Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-400 transition-colors flex items-center justify-center font-semibold">
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-slate-800 text-slate-300 px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                Browse docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                "Best practices" that get in your way
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Traditional approaches to styling require you to maintain a separate set of styles. With Tailwind, you style elements by applying pre-existing classes directly in your HTML.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <ChevronRight className="h-5 w-5 text-sky-500 mr-2" />
                  <span>No context switching</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <ChevronRight className="h-5 w-5 text-sky-500 mr-2" />
                  <span>No naming conventions</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <ChevronRight className="h-5 w-5 text-sky-500 mr-2" />
                  <span>No specificity wars</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-sky-500 to-sky-600 opacity-10 blur-lg"></div>
              <div className="relative">
                <pre className="language-jsx rounded-xl bg-slate-800/50 border border-slate-700">
                  <code className="language-jsx">{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Everything you need to build modern UIs
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tailwind CSS includes an extensive set of utility classes and components that make it easy to build complex user interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/75 transition-colors border border-slate-700/50">
              <div className="bg-sky-500/10 rounded-xl p-3 inline-block text-sky-400 mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Developer Experience</h3>
              <p className="text-slate-400 leading-relaxed">
                Auto-completion, syntax highlighting, and instant preview make it easy to build your UI.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/75 transition-colors border border-slate-700/50">
              <div className="bg-sky-500/10 rounded-xl p-3 inline-block text-sky-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance First</h3>
              <p className="text-slate-400 leading-relaxed">
                Built for production with advanced optimizations for maximum performance.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/75 transition-colors border border-slate-700/50">
              <div className="bg-sky-500/10 rounded-xl p-3 inline-block text-sky-400 mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile First</h3>
              <p className="text-slate-400 leading-relaxed">
                Responsive by default, with intuitive breakpoint prefixes for mobile-first design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500 to-sky-600 opacity-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[bottom_1px_center]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Get started with Tailwind CSS
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join thousands of developers building better websites with Tailwind CSS.
            </p>
            <button className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-400 transition-colors font-semibold inline-flex items-center">
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center mb-6">
                <svg className="h-8 w-8 text-sky-400" viewBox="0 0 50 31" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="currentColor" />
                </svg>
                <span className="ml-3 text-xl font-bold text-white">Tailwind CSS</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A utility-first CSS framework for rapid UI development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Documentation</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Installation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Core Concepts</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Customization</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Plugin API</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Playground</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">VS Code</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Discussions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Community</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Discord</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Tailwind Labs Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;