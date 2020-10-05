import React from 'react';
import { ThemeProvider } from 'styled-components'

import usePersistedState from './utils/usePersistedState'

import light from './components/styles/theme/light'
import dark from './components/styles/theme/dark'

import Header from './components/Header';
import Global from './components/styles/Global';

function App() {

  const [ theme, setTheme ] = usePersistedState( 'theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Global/> 
      <Header toggleTheme= {toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
