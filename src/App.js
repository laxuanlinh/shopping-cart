import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import SideFilter from './components/SideFilter';

function App() {
  return (
    <div className="App">
      <div className="main">
        <SideFilter />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
