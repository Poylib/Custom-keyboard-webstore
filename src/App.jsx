import Header from './components/Header/Header';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Theme from './pages/Theme';
import Home from './pages/Home';
import Korean from './components/keybord/Korean';
import English from './components/keybord/English';

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
