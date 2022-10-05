import Header from './components/Header/Header';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Theme from './pages/Theme';
import Korean from './pages/keybord/Korean';
import English from './pages/keybord/English';
import Keybord from './pages/keybord/Keybord';
import Home from './pages/Home';

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
        <Route path='/test' element={<Keybord />} />


      </Routes>
    </>
  );
}

export default App;
