import './App.css';
import Fun from './components/006/Fun';
import { useState } from "react";
import Sad from './components/006/Sad';

function App() {

    const [count, setCount] =useState(0);

    return (
        <div className="App">
            <header className='App-header'>
                <h1>State</h1>
                    <Fun spalva='red' setCount={setCount}></Fun>
                    <Sad count={count}></Sad>
            </header>
        </div>
    );
}

export default App;