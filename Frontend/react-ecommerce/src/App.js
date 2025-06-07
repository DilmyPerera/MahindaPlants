import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './component/context/CartContext';
import Navbar from './component/common/Navbar';
import Footer from './component/common/footer';
import Home from './component/pages/Home';
import ProductDetailsPage from './component/pages/ProductDetailsPage';
import CategoryListPage from './component/pages/CategoryListPage';
import CategoryProductsPage from './component/pages/CategoryProductsPage';
import CartPage from './component/pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetailsPage />} />
          <Route path='/categories' element={<CategoryListPage />} />
          <Route path='/category/:categoryId' element={<CategoryProductsPage />} />
          <Route path='/cart' element={<CartPage />} />

        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
