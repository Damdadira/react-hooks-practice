import styled, { ThemeProvider } from 'styled-components';

import Hook from './components/Hook';
import JavaScript from './components/Javascript';
import Props from './components/Props';
import ConditionalRendering from './components/ConditionalRendering';
import Input from './components/Input';
import UseRef from './components/useRef';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UseReducer from './components/UseReducer2';
import ClassComponent from './components/ClassComponent'
import CssModule from './components/CssModule'
import StyledComponents from './components/StyledComponents';

const MarginTwenty = styled.div`
  margin: 20px;
`

function App() {
  return (
    <> 
      <MarginTwenty>
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595',
            },
          }}
        >
          <StyledComponents></StyledComponents>
        </ThemeProvider>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <CssModule></CssModule>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <ClassComponent></ClassComponent>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <UseReducer></UseReducer>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <CreateUser></CreateUser>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <UseRef></UseRef>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <Input></Input>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <Hook></Hook>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <h2>Conditional Rendering</h2>
        <ConditionalRendering isSpecial={true}></ConditionalRendering> 
        <ConditionalRendering isSpecial={false}></ConditionalRendering> 
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <h2>Props</h2>
        {/* 모든값 할당 */}
        <Props color='green' yesterday='목요일😒' today='금요일🎉'></Props> 
        {/* 프로퍼티에 값이 없으면 기본값 세팅 */}
        <Props color='green' today='금요일🎉'></Props>
      </MarginTwenty>
      <hr/>
      <MarginTwenty>
        <JavaScript></JavaScript>
      </MarginTwenty>
      <hr/>
    </>
  )
}

export default App;
