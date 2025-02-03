import { PlayN } from './PlayN';
import './App.css';
import React from 'react';

export function App() {
  const [data, setData] = React.useState(undefined);
  var [seek, setSeek] = React.useState(undefined);
  const url = `http://192.168.0.37:1310`;
  var prog=-1;
  console.log(seek);
  if(seek===undefined){
    seek=0;
  }
  if(data!==undefined){
    console.log(data)
    prog=data.split(' ')[0];
  }
  console.log(prog)
  const urlpart=prog===-1?'?seek='+seek:'?value='+prog+'&seek='+seek;
  console.log(urlpart)
  return (
    <div className='App'>
      <header>
        <div className="App-header">
          <img src="http://192.168.0.37:1234/ak.jpg" className="App-logo" alt="logo" ></img>
        </div>
      </header>
      <PlayN data={data} setData={setData} seek={seek} setSeek={setSeek} url={url}></PlayN>
      <PlayN data={data} setData={setData} url={url+'/dave'+urlpart}></PlayN>
    </div>

  );
}

export default App;
