
import {createGlobalStyle, ThemeProvider, ThemeContext} from 'styled-components'
// ThemeContext give ´s us access to the theme fro within header component  
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, useContext} from 'react'
import Login from 'components/pages/Login'
import Home from 'components/pages/Home'
import LightTheme from 'components/themes/light'
import DarkTheme from 'components/themes/dark'

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
  const [theme, setTheme] = useState(LightTheme);

  return (
    // styled-components will inject all of these theme variables as props to any styled component
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
    }}}>
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
