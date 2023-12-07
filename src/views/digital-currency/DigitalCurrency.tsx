import { useState } from 'react';

function DigitalCurrency() {
  const [count, setCount] = useState(1);

  return (
    <h1 className="text-3xl font-bold underline">
      DigitalCurrency
    </h1>
  );
}

export default DigitalCurrency;
