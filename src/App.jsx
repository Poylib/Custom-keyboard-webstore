import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Theme from './pages/Theme';
import DetailTop from './pages/detail/DetailTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/test' element={<DetailTop />} />
      </Routes>
    </>
  );
}

export default App
