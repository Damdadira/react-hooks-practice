import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #999;
  margin-right: 8px;
  padding: 4px 8px;
`

const TextContainer = styled.div`
  margin: 8px 0;
`

const BtnContainer = styled.div`
  margin-left: 9rem;
`

const Button = styled.button`
  padding: 6px 8px;
  background: #fff;
  border: 1px solid #999;
  color: #999;
  border-radius: 4px;
  margin-right: 8px;
`

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  useEffect(()=>{
    console.log('effect')
    console.log(name)
    return () => {
      console.log('cleanup')
      console.log(name)
    }
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  }

  const onClear = () => {
    setName('');
    setNickName('');
  }

  return(
    <div>
      <div>
        <Input value={name} onChange={onChangeName} />
        <Input value={nickname} onChange={onChangeNickName} />
      </div>
      <TextContainer>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </TextContainer>
      <BtnContainer>
        <Button onClick={onClear}>Save</Button>
        <Button onClick={onClear}>Clear</Button>
      </BtnContainer>
    </div>
  )
}

export default Info;