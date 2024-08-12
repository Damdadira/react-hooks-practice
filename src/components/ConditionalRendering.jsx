import React from 'react';

export default function ConditionalRendering({ isSpecial }) {
  return (
    <>
      <div
        style={{
          color: isSpecial ? 'orange' : 'skyblue',
          marginBottom: '8px',
        }}
      >
        오늘 날씨는 {isSpecial ? '맑음 🌞' : '흐림 ☔'}
      </div>
    </>
  );
}
