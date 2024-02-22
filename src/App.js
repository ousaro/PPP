import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import SignIn from "./Pages/SingIn";
import LogIn from "./Pages/LogIn";
import ForgotPass from "./Pages/ForgotPass";
import AssociationVerification from "./Pages/AssociationVerification"
import { LinkProvider } from './Context/LinkContext';
import { AuthenticationProvider } from "./Context/AuthenticationContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";



function App() {
  return (
    <Router>
    <LinkProvider>
    <AuthenticationProvider>
    <div className="App">
        <NavBar></NavBar>
        <div className="content">
            <Switch>
            <Route path="/" exact> <Home></Home></Route>
            <Route path="/SignIn"><SignIn></SignIn></Route>
            <Route path="/LogIn"><LogIn></LogIn></Route>
            <Route path="/ForgotPass"><ForgotPass></ForgotPass></Route>
            <Route path="/AssociationVerification"><AssociationVerification></AssociationVerification></Route>
            </Switch>
        </div>
    </div>
    </AuthenticationProvider>
    </LinkProvider>
    </Router>
   
  );
}

export default App;
