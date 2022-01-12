import './App.css';
import { Hero ,About, Ourtransaction, Whitepaper,Footer} from './components/Deafult';

function App() {
  return (
    <div className="App">
      <Hero id="hero" />
      <br/>
      <About id="about" />
      <br/>
      <Ourtransaction id="ourtransaction" />
      <br/>
      <Whitepaper id="whitepaper" />
      <br/>
      <Footer id="footer" className="footer" />
    </div>
  );
}

export default App;
