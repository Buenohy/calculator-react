import { useCalculator } from '../hooks/use-calculator';
import Card from './card';
import CalculatorDisplay from './calculator-display';
import Button from './button';

const buttons = [
  [
    { input: 'CE' },
    { input: 'C', className: 'flex-1 h-16' },
    { input: '/', variant: 'primary' as const },
  ],
  [
    { input: '7' },
    { input: '8' },
    { input: '9' },
    { input: '*', variant: 'primary' as const },
  ],
  [
    { input: '4' },
    { input: '5' },
    { input: '6' },
    { input: '-', variant: 'primary' as const },
  ],
  [
    { input: '1' },
    { input: '2' },
    { input: '3' },
    { input: '+', variant: 'primary' as const },
  ],
  [
    { input: '0', className: 'flex-1 h-16' },
    { input: ',' },
    { input: '=', className: 'w-16 h-16 bg-[#7F45E2]' },
  ],
];

export default function Calculator() {
  const { operation, result, doOperation } = useCalculator();

  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        {buttons.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex gap-3">
            {row.map((btn) => (
              <Button
                key={btn.input}
                className={btn.className || 'w-16 h-16'}
                variant={btn.variant || 'default'}
                onClick={() => doOperation(btn.input)}
              >
                {btn.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
