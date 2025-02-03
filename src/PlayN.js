import React from 'react';
import './PlayN.css'
export const PlayN = ({data,setData,url,seek,setSeek}) => {
  const setvalue=url.includes('dave');
  console.log(setvalue)
  const [backvalue, setB] = React.useState([]);
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
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  const getSeek = (event) => {
    const setit=Math.floor(+event.target.value+0.5)
   setSeek(setit)
    console.log(
      "Seek Value - ",
      setit
    );
  };
  if(!setvalue){
  return (
    <div className='base'>
      {
        <center>
          <select  className='sss'  onChange={onOptionChangeHandler}>
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
          <h3 className='sss'>You selected program {data}</h3>
        </center>
      }
      {
<center>
<div>
<label for="seek">Seek</label>
  <input onChange={getSeek} type="range" id="seek" name="position"  step="any" min="0" max="100" />
  <h3 className='sss'>Play from {seek}%</h3>
</div>
</center>
      }
      {
        backvalue.map(i=>(
          <p className='backers'>Current status: {i.status}</p>
        ))
      }
    </div>
  );
}else{
  return (
    <div className='base'>
      {
        backvalue.map(i=>(
          <p className='backers'>New status: {i.status}</p>
        ))
      }
    </div>
  );
}
};