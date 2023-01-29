import "./CSS/App.css";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TagLine from "./components/TagLine";

function App() {
  return (
    <div className="App">
      <Header />
      <TagLine />
      <Projects />
      <About />
      <footer></footer>
    </div>
  );
}

export default App;
