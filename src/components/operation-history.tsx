import { useContext } from 'react';
import Card from './card';
import Text from './text';
import { CalculatorContext } from '../context/calculator-context';

export default function OperationHistory() {
  const { history } = useContext(CalculatorContext);

  return (
    <Card className="w-full py-10 px-8">
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Text>
      {history.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {history.map((item, index) => (
            <Text key={`item-${index}`} as="li">
              {item}
            </Text>
          ))}
        </ul>
      ) : (
        <Text as="p" variant="muted">
          Nenhuma Operação Recente
        </Text>
      )}
    </Card>
  );
}
