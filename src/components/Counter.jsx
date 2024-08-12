import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 8px;
  margin-right: 12px;
  background: ${(props) => props.on ? "palevioletred" : "white"};
  color: ${(props) => props.on ? "white" : "palevioletred"};
  border: 2px solid palevioletred;
  border-radius: 4px;
  cursor: pointer;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const Counter = () => {
  const [value, setValue] = useState(0);
  return(
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <Button on onClick={() => setValue(value + 1)}>Plus</Button>
      <TomatoButton onClick={() => setValue(value - 1)}>Minus</TomatoButton>
    </div>
  )
}

export default Counter;