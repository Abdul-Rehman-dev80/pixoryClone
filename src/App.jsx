import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import UpperNav from "./Components/UpperNav";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import HeaderNav from "./Components/HeaderNav";

function App() {
  return (
    <div className="font-basic-sans">
      <UpperNav />
      <HeaderNav />
      <NavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
