import React, { useState, useEffect } from 'react';

const ClockFunctComp = () => {

  const [data, setData] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellidos: "San José"
  });

  const { fecha, edad, nombre, apellidos } = data;

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h2>
        Hora Actual: { fecha.toLocaleTimeString() }
      </h2>
      <h3> {nombre} {apellidos} </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );

  function tick(){
    setData( previusState => {
      let edad = previusState.edad +1;
      return {
        ...previusState,
        fecha: new Date(),
        edad,
      }
    });
  }

}

export default ClockFunctComp;
