import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Pillar from "./Components/Pillar";
import Services from "./Components/Services";
import Academy from "./Components/Academy";
import Contact from "./Components/Contact";
import './App.scss';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  AOS.init({
    duration: 1000
  });

  return (
    <div>
      <Navbar />
      <Home />
      <Pillar />
      <Services />
      <Academy />
      <Contact />
      <div id="footer" className="text-center">
        <p>&copy; Todos os direitos reservados</p>
        <p>41.274.311/0001-26</p>
      </div>
    </div>
  );
}

export default App;
