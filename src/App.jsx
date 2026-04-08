import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cursor from './Components/Cursor';
import About from './Components/About';
import './assets/style/cursor.css'; 
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
export default App;