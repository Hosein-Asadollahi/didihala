import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/main-header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";

import './Fonts/Shabnam-FD.ttf';
import classes from './App.module.scss';


function App() {
  return (
    <div className={classes.app}>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          {/* <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;