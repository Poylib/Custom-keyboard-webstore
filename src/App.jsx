import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Theme from './pages/Theme';
import Korean from './pages/keybord/Korean';
import English from './pages/keybord/English';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/korean' element={<Korean />} />
        <Route path='/english' element={<English />} />
      </Routes>
    </>
  );
}

export default App;
