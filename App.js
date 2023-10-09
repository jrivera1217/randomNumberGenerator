import logo from "./logo.svg";
import "./App.css";
import Random from "./randomApp";
import Foot from "./footer";
import Cabeza from "./header";

function App() {
  return (
    <div className="App">
      <Cabeza />
      <div class="card__container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div id="card">
          <h1>Random Numbers Generator</h1>
          <Random />
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default App;
