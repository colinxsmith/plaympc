import { PlayN } from './PlayN';
import './App.css';
import React from 'react';

export function App() {
  const [programnumber, setProgramNumber] = React.useState('-1');
  const [record, setRecord] = React.useState('-1');
  const [insert, setInsert] = React.useState('-1');
  const [station, setStation] = React.useState('-1');
  const [fix, setFix] = React.useState(false);
  const [mp3number, setMp3Number] = React.useState('-1');
  var [deletenumber, setDeleteNumber] = React.useState('-1');
  const [rescan, setRescan] = React.useState(false);
  var [seek, setSeek] = React.useState('-1');
  const url = `http://192.168.0.37:1310`;
  var prog = '-1';
  if (programnumber !== -1) {
    console.log(programnumber)
    prog = programnumber.split(' ')[0];
  }
  if (deletenumber !== '-1') deletenumber = deletenumber.split(' ')[0];
  console.log(seek, prog, mp3number, deletenumber, rescan, fix, record)
  var urlpart = '?';
  var station1 = station.replace('&', '%26')
  station1 = station1.replace('!', '%21')
  var insert1 = insert.replace('&', '%26')
  insert1 = insert1.replace('!', '%21')
  if (prog !== '-1') urlpart += 'value=' + prog;
  else if (record !== '-1') urlpart += 'record=' + record;
  else if (seek !== '-1') urlpart += 'seek=' + seek;
  else if (mp3number !== '-1') urlpart += 'mp3=' + mp3number;
  else if (insert !== '-1') urlpart += 'insert=' + insert1;
  else if (station !== '-1') urlpart += 'station=' + station1;
  else if (deletenumber !== '-1') urlpart += 'remove' + deletenumber;
  else if (rescan) urlpart += 'update';
  else if (fix) urlpart += 'fix';

  if (prog !== '-1' && !urlpart.includes('value')) urlpart += '&value=' + prog;
  if (record !== '-1' && !urlpart.includes('record')) urlpart += '&record=' + record;
  if (seek !== '-1' && !urlpart.includes('seek')) urlpart += '&seek=' + seek;
  if (mp3number !== '-1' && !urlpart.includes('mp3')) urlpart += '&mp3=' + mp3number;
  if (deletenumber !== '-1' && !urlpart.includes('remove')) urlpart += '&remove=' + deletenumber;
  if (rescan && !urlpart.includes('update')) urlpart += '&update';
  if (fix && !urlpart.includes('fix')) urlpart += '&fix';
  if (insert !== '-1' && !urlpart.includes('insert')) urlpart += '&insert=' + insert1;
  if (station !== '-1' && !urlpart.includes('station')) urlpart += '&station=' + station1;

  console.log(urlpart)
  return (
    <div className='App'>
      <header>
        <div className="App-header">
          <img src="http://192.168.0.37:1234/ak.jpg" className="App-logo" alt="logo" ></img>
        </div>
      </header>
      <PlayN record={record} setRecord={setRecord} station={station} setStation={setStation} insert={insert} setInsert={setInsert} deletenumber={deletenumber} setDeleteNumber={setDeleteNumber} setFix={setFix} rescan={rescan} setRescan={setRescan} mp3number={mp3number} setMp3Number={setMp3Number} programnumber={programnumber} setProgramNumber={setProgramNumber} seek={seek} setSeek={setSeek} url={url}></PlayN>
      <PlayN record={record} setRecord={setRecord} station={station} setStation={setStation} insert={insert} setInsert={setInsert} deletenumber={deletenumber} setDeleteNumber={setDeleteNumber} setFix={setFix} rescan={rescan} setRescan={setRescan} mp3number={mp3number} setMp3Number={setMp3Number} programnumber={programnumber} setProgramNumber={setProgramNumber} seek={seek} setSeek={setSeek} url={url + '/dave' + urlpart}></PlayN>
    </div>

  );
}

export default App;
