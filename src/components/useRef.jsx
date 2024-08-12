import React, { useState, useRef } from 'react';

export default function UseRef() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: '',
    });

    nameInput.current.focus();
  };

  return (
    <div style={{ display: 'block' }}>
      <style>
        {`
          .input_custom2::placeholder {
            color: orange;
          }
        `}
      </style>
      <h2>useRef</h2>
      <div style={{ display: 'flex', marginBottom: '12px' }}>
        <input
          className="input_custom2"
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          ref={nameInput}
          style={{
            marginRight: '8px',
            border: '1px solid orange',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
          onChange={onChange}
        />
        <input
          className="input_custom2"
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          style={{
            marginRight: '8px',
            border: '1px solid orange',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
          onChange={onChange}
        />
        <button
          onClick={onReset}
          style={{
            background: 'orange',
            border: '1px solid orange',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
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
