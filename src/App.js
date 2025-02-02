import { PlayN } from './PlayN';
import './App.css';
import React from 'react';

export function App() {
  const [data, setData] = React.useState(undefined);
  const url = `http://192.168.0.37:1310`;
  var prog;
  if(data!==undefined){
    console.log(data)
    prog=data.split(' ')[0];
  }
  console.log(prog)
  const urlpart='?value='+prog;
  console.log(urlpart)
  return (
    <div className='App'>
      <header>
        <div className="App-header">
          <img src="http://192.168.0.37:1234/ak.jpg" className="App-logo" alt="logo" ></img>
        </div>
      </header>
      <PlayN data={data} setData={setData} url={url}></PlayN>
      <PlayN data={data} setData={setData} url={url+'/dave'+urlpart}></PlayN>
    </div>

  );
}

export default App;
