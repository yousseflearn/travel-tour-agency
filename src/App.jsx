import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroHeader from "./components/hero-header/HeroHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroHeader />
    </div>
  );
}

export default App;
