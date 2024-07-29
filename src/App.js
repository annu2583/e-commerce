
import './App.css';
import Footer from './components/header-footer/footer';
import Header from './components/header-footer/header';
import { ProductsProvider } from './contaxt/Products';
import { useTheme } from './contaxt/ThemeContaxt';
import './snippets/button.css';
import './styles/header.css';




function App() {


  const { thememode, mode } = useTheme()


  return (
    <>

      <ProductsProvider>
        <Header />
      </ProductsProvider>



      <h1>{mode}</h1>
      <div onClick={() => thememode()}  >
        mode
      </div>
      <Footer />
    </>
  );
}



export default App;
