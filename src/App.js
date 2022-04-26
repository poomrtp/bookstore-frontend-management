import Home from './pages/home/Home';
import Product from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/products">
            <Route index element={<Product />} />
            <Route path=":name" element={<ProductDetail />} />
            <Route path="create" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state
  }
}
export default connect(mapStateToProps)(App)
