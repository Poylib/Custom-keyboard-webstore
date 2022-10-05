import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DetailTop from './pages/detail/DetailTop';
import Main from './pages/Main';
import Theme from './pages/Theme';
import Korean from './pages/keybord/Korean';
import English from './pages/keybord/English';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/korean' element={<Korean />} />
        <Route path='/english' element={<English />} />
      </Routes>
    </>
  );
}

export default App;
