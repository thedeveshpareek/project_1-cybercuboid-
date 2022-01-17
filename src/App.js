import './App.css';
import { Hero ,About, Ourtransaction, Whitepaper,Footer,Tokendistribution} from './components/Deafult';

function App() {
  return (
    <div className="App">
      <Hero />
      <br/>
      <About />
      <br/>
      <Whitepaper/>
      <br/>
      <Tokendistribution/>
      <br/>
      <Ourtransaction />
      <br/>
      <Footer className="footer" />
    </div>
  );
}

export default App;
