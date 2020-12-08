import './App.css';
import Clock from './components/Clock';
import { useState } from 'react';

function App() {
  const [clockShown, setClockShown] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {clockShown && <Clock />}
        <button onClick={() => setClockShown(!clockShown)}>
          Mount/Unmount Clock
        </button>
      </header>
    </div>
  );
}

export default App;
