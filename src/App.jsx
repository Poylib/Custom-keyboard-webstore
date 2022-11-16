import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './GlobalStyle';
import Theme from './pages/Theme';
import Keybord from './components/keybord/Keybord';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/test' element={<Keybord />} />
      </Routes>
    </>
  );
}

export default App;
