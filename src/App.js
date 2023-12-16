import NavBar from "./NavBar";
import Home from "./Home";


import {BrowserRouter as Router} from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar></NavBar>
        <div className="content">
            <Home></Home>
        </div>
    </div>
    </Router>
   
  );
}

export default App;
