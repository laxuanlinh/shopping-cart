import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import SideFilter from './components/SideFilter';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <CartSidebar />
      <div className="main">
        <SideFilter />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
