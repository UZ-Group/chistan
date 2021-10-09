import React from 'react';


function Cat({x,y}) {
    return ( 
        <div>
           <img src={'cat.png'} alt={'cat'} style={{position: 'absolute', left:x, top:y }}/>
        </div>
     );
}

export default Cat;