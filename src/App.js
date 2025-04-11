import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Techshop } from './Components/Homepage/Techshop';
import { Cart } from './Components/CartPage/Cart';
import { Singleproduct } from './Components/Singleproductdetails/Singleproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Techshop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Singleproduct/:id" element={<Singleproduct/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
