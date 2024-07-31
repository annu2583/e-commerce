
import './App.css';
// import Header from './components/header-footer/header';
import './snippets/button.css';
// import Footer from './components/header-footer/footer';
import './styles/footer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
function App() {
  return(

  <>
  {/* <Header/>
  <Footer/> */}
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Footer' element={<Footer/>}/>

  </Routes>
  </BrowserRouter>
  </>
  )
}

  

export default App;
