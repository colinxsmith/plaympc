import { PlayN } from './PlayN';
import './App.css';

export function App() {
  return (
    <div className='App'>
      <header>
        <div className="App-header">
          <img src="http://192.168.0.37:1234/ak.jpg" className="App-logo" alt="logo" ></img>
        </div>
      </header>
      <PlayN station={3}></PlayN>
    </div>

  );
}

export default App;
