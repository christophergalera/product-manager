import './App.css';
import { Router } from '@reach/router';
import ProductManager from './components/productmanager';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductManager path="/"/>
      </Router>
    </div>
  );
}

export default App;
