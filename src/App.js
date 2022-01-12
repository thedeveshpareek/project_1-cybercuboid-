import './App.css';
import { Hero ,About, Ourtransaction, Whitepaper ,Footer} from './components/Deafult';

function App() {
  return (
    <div className="App">
      <Hero />
      <br/>
      <About/>
      <br/>
      <Ourtransaction/>
      <br/>
      <Whitepaper/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
