import React, { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState</h2>
      <p>
        you clicked{' '}
        <span
          style={{
            padding: '0 8px',
            fontSize: '22px',
            fontWeight: 500,
            color: 'blueviolet',
          }}
        >
          {count}
        </span>
      </p>
      <button
        style={{ marginRight: '12px' }}
        onClick={() => setCount(count + 1)}
      >
        Plus
      </button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
}
