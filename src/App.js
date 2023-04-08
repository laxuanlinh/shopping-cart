import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import SideFilter from './components/SideFilter';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Notification from './components/Notification';

function App() {
  return (
    <div className="App">
      <Header />
      <CartSidebar />
      <div className="main">
        <SideFilter />
        <ProductList />
      </div>
      <Notification />
    </div>
  );
}

export default App;
