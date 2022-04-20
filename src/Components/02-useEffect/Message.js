import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      //console.log(`Las cordenadas son x : ${coords.x} e y : ${coords.y}`);
      setCoords(coords);
    };

    //Cordenadas de la pantalla cuando el componente esté abierto
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial !</h3>
      <p>Estan son las cordenadas de tu Mouse en los ejes X y Y</p>
      <p>{`El eje X: ${x}`}</p>
      <p>{`El eje Y: ${y}`}</p>
    </div>
  );
};
