import { CalculatorProvider } from './context/calculator-provider';
import Calculator from './components/calculator';
import OperationHistory from './components/operation-history';

export default function App() {
  return (
    <main className="py-28 px-4 sm:px-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
      <CalculatorProvider>
        <Calculator />
        <OperationHistory />
      </CalculatorProvider>
    </main>
  );
}
