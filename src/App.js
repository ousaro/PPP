import NavBar from "./NavBar";
import Home from "./Home";
import SignIn from "./SingIn";


import {BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar></NavBar>
        <div className="content">
            <Switch>
            <Route path="/" exact> <Home></Home></Route>
            <Route path="/SignIn"><SignIn></SignIn></Route>
            </Switch>
        </div>
    </div>
    </Router>
   
  );
}

export default App;
