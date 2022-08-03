import Navbar from "./components/Navbar";
import Cart from './components/Cart'
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route } from  'react-router-dom'
import Product from "./components/Product";
import Preview from "./components/Preview";
 


function App() {
  return (
 <>
<Router>
  <Navbar/>
  <Switch>
      <Route path="/cart">
      <Cart/>
      </Route>
      <Route path="/preview">
        <Preview/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
  </Switch>
</Router>

 </>
  );
}

export default App;
