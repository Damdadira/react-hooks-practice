import React from 'react';

function JavaScript() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 16,
    padding: '1rem', //다른 단위 사용시 문자열로 설정
  };

  return (
    <>
      <h2>JS</h2>
      <div className="name-box" style={style}>
        name: {name}
      </div>
    </>
  );
}

export default JavaScript;
