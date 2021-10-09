import React, { useState } from 'react';
import Cat from './Cat';
import Snake from './Snake';

const Mouse = () => {

    const [mousePosition, setMousePosition] = useState({});

    function mouseMove(e) {
        setMousePosition({x : e.clientX, y : e.clientY})
        console.log(e)
    }

  return (
    <div onMouseMove={mouseMove} style={{padding:"20rem"}}>
        <p> x:{mousePosition.x}, y:{mousePosition.y} </p>\
        <Cat x={mousePosition.x} y={mousePosition.y}/>
        <Snake x={mousePosition.x} y={mousePosition.y}/>
    </div>
  );
};

export default Mouse;