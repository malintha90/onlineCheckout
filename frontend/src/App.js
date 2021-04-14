import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './components/ProductScreen';
import Cart from './components/cart';
import Home from './components/home';
import NavBar from './components/navbar';
import { useSelector } from 'react-redux';

function App() {
  const {cartItems} = useSelector(state => state.cartItems);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar cartItems={cartItems}/>
        <main>
          <switch>
            <Route path="/product/:id" exact component={ProductScreen}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/" exact component={Home}></Route>
          </switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
