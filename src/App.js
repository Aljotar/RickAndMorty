import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TheNav } from "./Components/TheNav";
import { Principal } from "./Components/Principal";
import Caratulas from "./Components/Caratulas";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <TheNav />
      <Principal />
      <Caratulas />
      <Footer />
    </div>
  );
}

export default App;
