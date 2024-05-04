import facts from './models/facts'; // import facts 
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card info={facts} />
    </div>
  );
}

export default App;
