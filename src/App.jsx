import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Theme from './pages/Theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
      </Routes>
    </>
  );
}

export default App;
