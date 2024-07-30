
import './App.css';
import Footer from './components/header-footer/footer';
import Header from './components/header-footer/header';
import Banner from './components/home/banner';
import './styles/banner.css';
// import { ProductsProvider } from './contaxt/Products';
// import { useTheme } from './contaxt/ThemeContaxt';
import './snippets/button.css';
import './styles/header.css';
import Features from './components/home/features';
import './styles/features.css';





function App() {


  // const { thememode, mode } = useTheme()


  return (
    <>

      {/* <ProductsProvider> */}
        <Header />
      {/* </ProductsProvider> */}



      {/* <h1>{mode}</h1>
      <div onClick={() => thememode()}  >
        mode */}
      {/* </div> */}
      <Banner/>
      <Features/>
      {/* <Footer /> */}
      
    </>
  );
}



export default App;
