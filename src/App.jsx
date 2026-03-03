import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import UpperNav from "./Components/UpperNav";

function App() {
  return (
    <div className="font-basic-sans">
      <UpperNav />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
