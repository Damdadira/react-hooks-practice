import React, { useRef, useCallback, useReducer } from 'react';
import UserList from './UserList';

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ],
  selectedItem: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'create':
      return {
        ...state,
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'remove':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id), //일치하지 않는 값만 추출해서 새로운 배열 생성
      };
    case 'setUpdate':
      return {
        ...state,
        inputs: {
          username: action.item.username,
          email: action.item.email,
        },
        selectedItem: action.item,
      };
    case 'update':
      return {
        ...state,
        inputs: initialState.inputs,
        users: state.users.map((user) =>
          user.id === state.selectedItem.id ? { ...user, ...action.user } : user
        ),
      };
    default:
      return state;
  }
}

export default function CreateUser() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    dispatch({ type: 'change', name, value });
  }, []);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    dispatch({
      type: 'create',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });

    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: 'remove', id });
    },
    [users]
  );

  const onUpdate = (item) => {
    dispatch({ type: 'setUpdate', item });
  };

  const onUpdateUser = useCallback(() => {
    dispatch({
      type: 'update',
      user: {
        username,
        email,
      },
    });
  }, [username, email]);

  return (
    <div>
      <style>
        {`
          .input_custom3::placeholder {
            color: cornflowerblue;
          }
        `}
      </style>
      <h2>Array</h2>
      <div style={{ display: 'flex', marginBottom: '24px' }}>
        <input
          className="input_custom3"
          type="text"
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
          style={{
            marginRight: '8px',
            border: '1px solid cornflowerblue',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
        />
        <input
          className="input_custom3"
          type="text"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
          style={{
            marginRight: '8px',
            border: '1px solid cornflowerblue',
            borderRadius: '4px',
            padding: '2px 8px',
          }}
        />
        <button
          style={{
            background: 'cornflowerblue',
            border: '1px solid cornflowerblue',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 8px',
            marginRight: '8px',
          }}
          onClick={onCreate}
        >
          등록
        </button>
        <button
          style={{
            background: '#fff',
            border: '1px solid cornflowerblue',
            color: 'cornflowerblue',
            borderRadius: '4px',
            padding: '4px 8px',
            marginRight: '8px',
          }}
          onClick={onUpdateUser}
        >
          수정
        </button>
      </div>
      <UserList
        users={users}
        onRemove={onRemove}
        onUpdate={onUpdate}
      ></UserList>
    </div>
  );
}
