import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cursor from './Components/Cursor';
import About from './Components/About';
import './assets/style/cursor.css'; 

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Home />
      <About />
    </div>
  );
}
export default App;