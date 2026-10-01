import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function getInitialPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

const pageTitles: Record<string, string> = {
  '/': 'Dzone Car Rental — Premium Hybrid Vehicle Rental',
  '/cars': 'Our Cars — Dzone Car Rental',
  '/contact': 'Contact — Dzone Car Rental',
};

function getPageTitle(path: string): string {
  if (pageTitles[path]) return pageTitles[path];
  if (path.startsWith('/cars')) return pageTitles['/cars'];
  if (path.startsWith('/contact')) return pageTitles['/contact'];
  return pageTitles['/'];
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const onHashChange = () => {
      setPath(getInitialPath());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = getPageTitle(path);
  }, [path]);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
