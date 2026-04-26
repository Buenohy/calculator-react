import { createContext, useState, useEffect, ReactNode } from 'react';

interface CalculatorContextType {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType>(
  {} as CalculatorContextType,
);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);
  const historyStorageKey = 'history';

  useEffect(() => {
    const saved = localStorage.getItem(historyStorageKey);
    if (saved) {
      setHistory(JSON.parse(saved) as string[]);
    }
  }, []);

  const updateHistory = (operation: string, parsedResult: string) => {
    setHistory((prev) => {
      const updated = [...prev, `${operation}=${parsedResult}`];
      localStorage.setItem(historyStorageKey, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
