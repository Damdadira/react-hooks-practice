import React, { useState } from 'react';

export default function Input() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value, //name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div style={{ display: 'block' }}>
      <style>
        {`
          .input_custom::placeholder {
            color: tomato;
          }
        `}
      </style>
      <h2>useState(input)</h2>
      <div style={{ display: 'flex', marginBottom: '12px' }}>
        <input
          className="input_custom"
          type="text"
          placeholder="name"
          style={{
            marginRight: '8px',
            border: '1px solid tomato',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
          onChange={onChange}
          name="name"
          value={name}
        />
        <input
          className="input_custom"
          type="text"
          placeholder="nickname"
          style={{
            marginRight: '8px',
            border: '1px solid tomato',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
          onChange={onChange}
          name="nickname"
          value={nickname}
        />
        <button
          style={{
            background: 'tomato',
            border: '1px solid tomato',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
          onClick={onReset}
        >
          초기화
        </button>
      </div>
      <div>
        <b style={{ color: 'darkgray' }}>
          값: {name} / {nickname}
        </b>
      </div>
    </div>
  );
}
