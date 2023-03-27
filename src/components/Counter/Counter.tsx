import React, { useState } from 'react';
import cls from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={cls.button}>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;