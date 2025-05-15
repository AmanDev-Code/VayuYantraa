
'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sun, Moon, SunMoon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark mode, fallback to system preference if no saved preference
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Apply the theme to document
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    if (!theme) return;
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Don't render until we know what theme we're using
  if (!theme) return null;

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className={cn("rounded-full w-9 h-9 transition-all", className)}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
