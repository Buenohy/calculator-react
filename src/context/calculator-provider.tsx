import { useState, useCallback, type ReactNode } from 'react';
import { CalculatorContext } from './calculator-context';

const HISTORY_KEY = 'history';

function getInitialHistory(): string[] {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[]>(getInitialHistory);

  const updateHistory = useCallback(
    (operation: string, parsedResult: string) => {
      const entry = `${operation}=${parsedResult}`;
      setHistory((prev) => {
        const updated = [...prev, entry];
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    [],
  );

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
