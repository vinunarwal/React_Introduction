
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='p-16'>
      <p className='text-xl text-green-600 mb-3'> Output :</p>
      <p className='text-lg'>Count : {count}</p>
      <button className='px-6 py-1 border-1 bg-green-700 mt-3 mr-5 text-white' onClick={increment}>+</button>
      <button className='px-6 py-1 border-1 bg-green-700 text-white' onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
