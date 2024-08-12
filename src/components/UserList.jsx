import React, { useEffect } from 'react';

function User({ user, onRemove, onUpdate }) {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      // console.log('user 바뀌기 전..');
      // console.log(user);
    };
  }, [user]);

  return (
    <div style={{ marginBottom: '4px' }}>
      ✅{' '}
      <b
        style={{
          color: user.active ? 'maroon' : 'darkgreen',
          cursor: 'pointer',
        }}
      >
        {user.username}{' '}
      </b>
      <span style={{ color: 'seagreen', marginRight: '4px' }}>
        {user.email}
      </span>
      <button
        style={{ background: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={() => onUpdate(user)}
      >
        📝
      </button>
      <button
        style={{ background: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={() => onRemove(user.id)}
      >
        ✖
      </button>
    </div>
  );
}

export default function UserList({ users, onRemove, onUpdate }) {
  return (
    <>
      {users.map((item, index) => (
        <User
          user={item}
          key={item.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        ></User>
      ))}
    </>
  );
}
