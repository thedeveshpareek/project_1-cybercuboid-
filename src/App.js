import './App.css';
import { Hero ,About, Ourtransaction, Whitepaper,Footer,Tokendistribution} from './components/Deafult';

function App() {
  return (
    <div className="App">
      <Hero id="hero" />
      <br/>
      <About id="about" />
      <br/>
      <Whitepaper id="whitepaper" />
      <br/>
      <Tokendistribution/>
      <br/>
      <Ourtransaction id="ourtransaction" />
      <br/>
      <Footer id="footer" className="footer" />
    </div>
  );
}

export default App;
