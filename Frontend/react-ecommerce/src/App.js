import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { CartProvider } from './component/context/CardContext';
import Navbar from './component/common/Navbar';
import Footer from './component/common/footer';
import Home from './component/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
