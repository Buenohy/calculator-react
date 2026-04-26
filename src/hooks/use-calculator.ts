import { useState, useContext } from 'react';
import { CalculatorContext } from '../context/calculator-context';

export function useCalculator() {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const { updateHistory } = useContext(CalculatorContext);

  const doOperation = (input: string) => {
    if (input === 'C') {
      setOperation('');
      setResult('');
      return;
    }

    if (input === 'CE') {
      setResult('');
      setOperation((prev) => prev.slice(0, -1));
      return;
    }

    if (input === '=') {
      try {
        // eval usado para manter a lógica original; em produção, substitua por uma calculadora segura
        const operationResult = eval(operation.replace(/,/g, '.'));
        const parsedResult = operationResult.toString().replace(/\./g, ',');
        setResult(parsedResult);
        updateHistory(operation, parsedResult);
        return;
      } catch {
        setResult('Erro');
      }
      return;
    }

    if (result) {
      setOperation(isNaN(Number(input)) ? `${result}${input}` : input);
      setResult('');
      return;
    }

    if (input === ',' && !operation.endsWith(',')) {
      setOperation((prev) => `${prev},`);
      return;
    }

    setOperation((prev) => `${prev}${input}`);
  };

  return { operation, result, doOperation };
}
