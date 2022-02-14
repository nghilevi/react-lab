
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from 'components/pages/Login'
import Home from 'components/pages/Home'

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
