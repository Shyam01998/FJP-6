import LandingPage from "./components/landingPage";
import Register from "./components/register";
import Header from "./components/header";
import Login from "./components/login";
import Template from "./components/template";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
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
      <Template/>
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
    <Route path="/contact" exact>
      <Contact/>
    </Route>
    <Route path="/education" exact>
      <Education/>
    </Route>
   </Switch>
   </>
  );
}

export default App;
