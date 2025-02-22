import { PlayN } from './PlayN';
import './App.css';
import React from 'react';

export function App() {
  const [programnumber, setProgramNumber] = React.useState('-1');
  const [mp3number,setMp3Number]=React.useState(undefined);
  var [deletenumber,setDeleteNumber]=React.useState('-1');
  const [rescan,setRescan]=React.useState(false);
  var [seek, setSeek] = React.useState('-1');
  const url = `http://192.168.0.37:1310`;
  var prog=-1;
  if(seek===undefined){
    seek=-1;
  }
  if(programnumber!==undefined){
    console.log(programnumber)
    prog=programnumber.split(' ')[0];
  }
  if(deletenumber!=='-1')deletenumber  =deletenumber.split(' ')[0];
  console.log(seek,prog,mp3number,deletenumber,rescan)
  var urlpart='?';
  if(prog!==-1)urlpart+='value='+prog;
  else if(seek!==-1)urlpart+='seek='+seek;
  else if(mp3number!==undefined)urlpart+='mp3='+mp3number;
  else if(deletenumber!=='-1')urlpart+='remove'+deletenumber;
  else if(rescan)urlpart+='rescan';

  if(prog!==-1 && !urlpart.includes('value'))urlpart+='&value='+prog;
  if(seek!==-1 && !urlpart.includes('seek'))urlpart+='&seek='+seek;
  if(mp3number!==undefined && !urlpart.includes('mp3'))urlpart+='&mp3='+mp3number;
  if(deletenumber!=='-1' )urlpart+='&remove='+deletenumber;
  if(rescan )urlpart+='&rescan';

  console.log(urlpart)
  return (
    <div className='App'>
      <header>
        <div className="App-header">
          <img src="http://192.168.0.37:1234/ak.jpg" className="App-logo" alt="logo" ></img>
        </div>
      </header>
      <PlayN deletenumber={deletenumber} setDeleteNumber={setDeleteNumber} rescan={rescan} setRescan={setRescan} mp3number={mp3number}  setMp3Number={setMp3Number} programnumber={programnumber} setProgramNumber={setProgramNumber} seek={seek} setSeek={setSeek} url={url}></PlayN>
      <PlayN deletenumber={deletenumber} setDeleteNumber={setDeleteNumber}  rescan={rescan} setRescan={setRescan}  mp3number={mp3number}  setMp3Number={setMp3Number} programnumber={programnumber} setProgramNumber={setProgramNumber} seek={seek} setSeek={setSeek} url={url+'/dave'+urlpart}></PlayN>
    </div>

  );
}

export default App;
