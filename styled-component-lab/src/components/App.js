
import {createGlobalStyle, ThemeProvider} from 'styled-components'
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

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f'
}

function App() {
  return (
    // styled-components will inject all of these theme variables as props to any styled component
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
