import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting timestamp={new Date()} />
    </div>
  );
}

export default App;
