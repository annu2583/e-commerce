
import './App.css';
// import Header from './components/header-footer/header';
import './snippets/button.css';
// import Footer from './components/header-footer/footer';
import './styles/footer.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/pages/home';
import Footer from './components/header-footer/footer';
import Header from './components/header-footer/header';
import Banner from './components/home/banner';
import './styles/banner.css';
// import { ProductsProvider } from './contaxt/Products';
// import { useTheme } from './contaxt/ThemeContaxt';
import './snippets/button.css';
import './styles/header.css';
// import Features from './components/home/features';
// import './styles/features.css';
// import Home from './components/pages/home';
// import About from './pages/about'


function App() {

  <>
    {/* <Header/>
  <Footer/> */}
    {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Footer' element={<Footer/>}/>

  </Routes>
  </BrowserRouter> */}
  </>


  // const { thememode, mode } = useTheme()


  return (
    <>

      {/* <ProductsProvider> */}
    <Header />
      <Banner />



    
      


      <Footer/>
      {/* </ProductsProvider> */}



      {/* <h1>{mode}</h1>
      <div onClick={() => thememode()}  >
        mode */}
      {/* </div> */}
      {/* <Banner/>
      <Features/> */}
      {/* <Footer /> */}

    </>
  );
}



export default App;
