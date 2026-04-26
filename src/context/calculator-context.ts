import { createContext } from 'react';

export interface CalculatorContextType {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType>(
  {} as CalculatorContextType,
);
