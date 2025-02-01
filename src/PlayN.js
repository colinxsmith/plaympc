import React from 'react';
import './PlayN.css'
export const PlayN = () => {
  const [backvalue, setB] = React.useState([]);
  React.useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    }
    const url = `http://192.168.0.37:1310`;
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
  }, []);
  return (
    <div>   
    {
      backvalue.map(i=>(
        <p className='backers' title='received'>{i.status}</p>
      ))
    } {
      backvalue.map((i)=>(
        i.playlist.map((j)=>(
          <p className='backers' title='received'>{j}</p>
        ))
      ))
    }
    </div>    
  );
};