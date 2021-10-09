import React from 'react';


function Snake({x,y}) {
    return ( 
        <div>
           <img src={'snake.png'} alt={'Snake'} style={{position: 'absolute', left:x+50, top:y+50 }}/>
        </div>
     );
}

export default Snake;