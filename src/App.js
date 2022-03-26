import Home from './pages/home/Home';
import Product from './pages/product/Product.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/product">
            <Route index element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
