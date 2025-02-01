import React from 'react';
import './PlayN.css'
export const PlayN = () => {
  const [backvalue, setB] = React.useState([]);
  const [data, setData] = React.useState(undefined);
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
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  return (
    <div>
      {
        <center>
          <select onChange={onOptionChangeHandler}>
            <option>Please choose one option</option>
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
          <h3>You selected: {data} </h3>
        </center>
      }
    </div>
  );
};