import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'remove':
      return state - 1;
    default:
      return state;
  }
}

export default function UseReducer2() {
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer</h2>
      <div>
        <span style={{ marginRight: '24px' }}>
          count:{' '}
          <span style={{ color: 'darkgoldenrod', fontSize: '24px' }}>
            {number}
          </span>
        </span>
        <button
          onClick={() => dispatch({ type: 'add' })}
          style={{ marginRight: '8px' }}
        >
          +1
        </button>
        <button onClick={() => dispatch({ type: 'remove' })}>-1</button>
      </div>
    </>
  );
}
