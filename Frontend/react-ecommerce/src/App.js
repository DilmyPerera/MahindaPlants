import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/context/CardContext';
import Navbar from './component/common/Navbar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
