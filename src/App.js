import './App.css';
import { Hero ,About, Ourtransaction, Whitepaper } from './components/Deafult';

function App() {
  return (
    <div className="App">
      <Hero />
      <br/>
      <About/>
      <br/>
      <Ourtransaction/>
      <br/>
    </div>
  );
}

export default App;
