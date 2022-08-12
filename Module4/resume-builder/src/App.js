import LandingPage from "./components/landingPage";
import Register from "./components/register";
import Header from "./components/header";
import Login from "./components/login";
import Template from "./components/template";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Finalize from "./components/finalize";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  let state = useSelector((state)=>state);
  let auth = state.authReducer;
  return (
   <>
   <Header/>
   <Switch>
    <Route path="/" exact>
      <LandingPage/>
    </Route>
    <Route path="/template" exact component={auth.isAuth?Template :Login}> </Route>
    <Route path="/about" exact>
      <About/>
    </Route>
    <Route path="/login" exact component={auth.isAuth?LandingPage:Login}> </Route>
    <Route path="/register" exact component={auth.isAuth?LandingPage:Register}> </Route>
    <Route path="/contact" exact component={auth.isAuth?Contact:Login}> </Route>
    <Route path="/education" exact component={auth.isAuth?Education:Login}> </Route>
    <Route path="/finalize" exact component={auth.isAuth?Finalize:Login}></Route>
   </Switch>
   </>
  );
}

export default App;
