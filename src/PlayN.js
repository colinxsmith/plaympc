import React from 'react';
import './PlayN.css'
export const PlayN = ({ station }) => {
  const [backvalue, setB] = React.useState([]);
  React.useEffect(() => {
    const headers = { 'Content-Type': 'application/json' }
    const url = `http://192.168.0.37:1310/dave?value=${station}`;
    fetch(url, {
      mode: 'no-cors'
    })
      .then((rs) => (rs.json()))
      .then((ss) => setB(ss))
      .catch((err) => {
        console.log(err.message);
      });
  }, [station]);

  return (
    <div>
      <p className='backers' title='station'>Trying to get station number {station}</p>
      {
        backvalue.map((i) => (
          <p className='backers' title='received'>{i} </p>
        ))
      }
    </div>
  );
};