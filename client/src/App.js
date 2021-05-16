import './App.css';
import { Router } from '@reach/router';
import ProductManager from './components/productmanager';
import ProductDetails from './components/productDetails'
import EditProduct from './components/editProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <ProductManager path="/"/>
        <ProductDetails path="/products/:id/"/>
        <EditProduct path ="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
