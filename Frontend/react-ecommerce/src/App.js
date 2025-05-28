import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/context/CardContext';
import Navbar from './component/common/Navbar';
import Footer from './component/common/footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
