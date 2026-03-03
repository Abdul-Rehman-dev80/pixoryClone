import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import UpperNav from "./Components/UpperNav";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

function App() {
  return (
    <div className="font-basic-sans">
      <UpperNav />
      <NavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
