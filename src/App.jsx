import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Theme from './pages/Theme';
import Korean from './pages/keybord/Korean';
import English from './pages/keybord/English';
import Keybord from './pages/keybord/Keybord';
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/korean' element={<Korean />} />
        <Route path='/english' element={<English />} />
        <Route path='/test' element={<Keybord />} />

      </Routes>
    </>
  );
}

export default App;
