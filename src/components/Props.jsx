import React from 'react';

// type CompProps = {
//   color: string,
//   yesterday: string,
//   today: string,
// };

// function Props({ color, today, yesterday }: CompProps) {
export default function Props({ color, today, yesterday }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      어제는 <span style={{ color }}>'{yesterday}'</span>, 오늘은{' '}
      <span style={{ color }}>'{today}'</span>
    </div>
  );
}

Props.defaultProps = {
  yesterday: '수요일🤢',
};
