import Navbar from "./Components/Navbar";
import Home from "./Components/Home/index";
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
      <Services />
      <Academy />
      <Contact />
      <div id="footer" className="text-center">
        <p>&copy; Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default App;
