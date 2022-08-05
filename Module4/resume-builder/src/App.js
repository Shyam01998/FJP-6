import LandingPage from "./components/landingPage";
import Register from "./components/register";
import Header from "./components/header";
import Login from "./components/login";
import Templete from "./components/templete";
import About from "./components/about";
import { Route, Switch } from "react-router-dom";



function App() {
  return (
   <>
   <Header/>
   <Switch>
    <Route path="/" exact>
      <LandingPage/>
    </Route>
    <Route path="/template" exact>
      <Templete/>
    </Route>
    <Route path="/about" exact>
      <About/>
    </Route>
    <Route path="/login" exact>
      <Login/>
    </Route>
    <Route path="/register" exact>
      <Register/>
    </Route>

   </Switch>
   </>
  );
}

export default App;
