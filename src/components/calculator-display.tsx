import { tv, type VariantProps } from 'tailwind-variants';
import Text from './text';

const displayVariants = tv({
  slots: {
    root: 'flex flex-col gap-2 px-5.5 cursor-default select-none',
    operationLine: 'flex items-center justify-end h-7',
    resultLine: 'flex items-center justify-between h-9',
  },
});

const { root, operationLine, resultLine } = displayVariants();

interface CalculatorDisplayProps extends VariantProps<typeof displayVariants> {
  operation: string;
  result: string;
  className?: string;
}

export default function CalculatorDisplay({
  operation,
  result,
  className,
}: CalculatorDisplayProps) {
  return (
    <div className={root({ className })}>
      <Text as="div" variant="muted" className={operationLine()}>
        {result && operation}
      </Text>

      <div className={resultLine()}>
        <Text variant="muted">=</Text>
        <Text variant="blast">{result || operation}</Text>
      </div>
    </div>
  );
}
