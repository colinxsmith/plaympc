import React from 'react';
import './PlayN.css'
export const PlayN=({station})=>{
    React.useEffect(() => {
       fetch(`http://192.168.0.37:1310/dave?value=${station}`,{
         mode: 'no-cors',})
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, [station]);
 
    return (
        <div>
            <p  className='backers' title='station'>Trying to get station number {station}</p>
        </div>
    );
 };