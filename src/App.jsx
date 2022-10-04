import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import Theme from './pages/Theme';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/theme/:id' element={<Theme />} />
      </Routes>
    </>
  );
}

export default App;
