import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
       <div className="content">
            <Home></Home>
       </div>
    </div>
  );
}

export default App;
