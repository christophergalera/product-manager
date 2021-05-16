import './App.css';
import { Router } from '@reach/router';
import ProductManager from './components/productmanager';
import ProductDetails from './components/productDetails'


function App() {
  return (
    <div className="App">
      <Router>
        <ProductManager path="/"/>
        <ProductDetails path="/products/:id/"/>
      </Router>
    </div>
  );
}

export default App;
