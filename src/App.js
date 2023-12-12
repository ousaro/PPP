import NavBar from "./NavBar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar></NavBar>
        <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/AboutUs">
                  <AboutUs></AboutUs>
              </Route>
              <Route path="/Services">
                  <Services></Services>
              </Route>
              <Route path="/Contact">
                  <Contact></Contact>
              </Route>
            </Switch>
        </div>
    </div>
    </Router>
   
  );
}

export default App;
