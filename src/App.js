
import Navbar from "./Navbar"
import Home from "./Home"
import Home2 from "./Home2"
import Home3 from "./Home3";
function App() {
  const title="APP component."
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home3/>
      </div>
    </div>
  );
}

export default App;
