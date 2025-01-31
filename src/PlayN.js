import React from 'react';
import './PlayN.css'
export const PlayN = ({ station }) => {
  const [backvalue, setB] = React.useState([]);
  React.useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    }
    const url = `http://192.168.0.37:1310/dave?value=${station}`;
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
  }, [station]);

  return (
    <div>
      <p className='backers' title='station'>Trying to get station number {station}</p>      {
        backvalue.map((i) => (
          <p className='backers' title='received'>Playing {i.status}. Track {i.value}, amount played {i.seek}.</p>
        ))
      }
    </div>
  );
};