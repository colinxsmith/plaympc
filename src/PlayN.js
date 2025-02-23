import React from 'react';
import './PlayN.css'
export const PlayN = ({ fix,setFix,deletenumber, setDeleteNumber, rescan, setRescan, mp3number, setMp3Number, programnumber, setProgramNumber, url, seek, setSeek }) => {
  const setvalue = url.includes('dave');

  console.log(setvalue)
  const [backvalue, setB] = React.useState([]);
  console.log(backvalue)
  React.useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    }
    fetch(url, {
      mode: 'cors'
    },
      {
        headers: headers,
      })
      .then((rs) => rs.json())
      .then((ss) => {
        console.log(ss);
        setB(ss);
      }
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);
  const programSelect = (event) => {
    setProgramNumber(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  const deleteSelect = (event) => {
    setDeleteNumber(event.target.value);
    console.log(
      "Delete - ",
      event.target.value
    );
  };
  const mp3Select = (event) => {
    var file = event.target.value
    file = file.split('/')[file.split('/').length - 1];
    setMp3Number(file)
    console.log('mp3 file selected', file)
  }
  const getSeek = (event) => {
    const setit = Math.floor(+event.target.value + 0.5)
    setSeek(setit)
    console.log(
      "Seek Value - ",
      setit
    );
  };
  const reScan = (event) => {
    console.log('rescan')
    setRescan(true);
  };
  const fixserver = (event) => {
    setFix(true);
  };
  if (!setvalue) {
    return (
      <div className='base'>
        {
          <center>
            <select className='sss' onChange={mp3Select}>
              <option>Choose jazzfm mp3 file</option>
              {
                backvalue.map((i) => (
                  i.mp3files
                    .map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })
                ))
              }
            </select>
            <h3 className='sss'>{mp3number==='-1'?'Nothing selected':'You selected mp3 file '+mp3number}</h3>
          </center>
        }
        {
          <center>
            <select className='sss' onChange={programSelect}>
              <option>Choose a program</option>
              {
                backvalue.map((i) => (
                  i.playlist
                    .map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })
                ))
              }
            </select>
            <h3 className='sss'>{programnumber === '-1' ? 'Nothing selected' : programnumber}</h3>
          </center>
        }
        {
          <center>
            <div>
              <label for="seek">Seek</label>
              <input onChange={getSeek} type="range" id="seek" value={seek} step="any" min="0" max="100" />
              <h3 className='sss'>Playing from {seek <= 0 ? "the start" : seek + "%"}</h3>
            </div>
          </center>
        }

{
          <div>
            <button className='update' defaultValue={false} onClick={reScan}>Update</button>
          </div>
        }
        {
          <center>
          <div>
            <button className='fix' defaultValue={false} onClick={fixserver}>Fix Server Problems</button>
          </div>
          </center>
        }

{
          backvalue.map(i => (
            <p className='backers'>Current status:<br></br>{i.status}</p>
          ))
        }
        {
          <center >
            <select className='sssd' onChange={deleteSelect}>
              <option>Choose a program to delete</option>
              {
                backvalue.map((i) => (
                  i.playlist
                    .map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })
                ))
              }
            </select>
            <h3 className='sssd'>{deletenumber === '-1' ? 'Nothing selected' : deletenumber}</h3>
          </center>
        }
      </div>
    );
  } else {
    return (
      <div className='base'>
        {
          backvalue.map(i => (
            <p className='backers'>New status:<br></br>{i.status}</p>
          ))
        }
        {
          backvalue.map(i => (
            <p className='backers'>{i.update?'Backup status:':''}<br></br>{i.update}</p>
          ))
        }
      </div>
    );
  }
};