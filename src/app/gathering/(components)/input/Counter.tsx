'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-w-[175px] px-4 py-3 text-lg text-neutral-50 font-medium border border-neutral-10 rounded-xl">
      <button
        className="flex-1 mr-5"
        onClick={() => setCount(prev => (prev > 0 ? prev - 1 : prev))}
      >
        -
      </button>
      {count}
      <button
        className="flex-1 ml-5"
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
