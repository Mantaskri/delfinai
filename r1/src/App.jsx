import './App.css';
import Kosmosas from './components/005/Kosmosas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cia Vyks 'React' darbai</h1>
        <Kosmosas colour='red' sideSpace='50px' bgc='cyan'/>
        <Kosmosas colour='blue' sideSpace='10px' bgc='greenyellow'/>
      </header>
    </div>
  );
}

export default App;