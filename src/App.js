
import './App.css';
import './styles/banner.css';
import './snippets/button.css';
import './styles/header.css';
import './styles/features.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header-footer/header';

function App() {
  return (
    <>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}



export default App;
