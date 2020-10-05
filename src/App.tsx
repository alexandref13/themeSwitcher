import React from 'react';
import { ThemeProvider } from 'styled-components'

import light from './components/styles/theme/light'

import Header from './components/Header';
import Global from './components/styles/Global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Global/> 
      <Header />
    </ThemeProvider>
  );
}

export default App;
