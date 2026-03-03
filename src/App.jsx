import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import UpperNav from "./Components/UpperNav";
import Section1 from "./Components/Section1";

function App() {
  return (
    <div className="font-basic-sans">
      <UpperNav />
      <NavBar />
      <Hero />
      <Section1 />
    </div>
  );
}

export default App;
