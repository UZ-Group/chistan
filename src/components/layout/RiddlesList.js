import React from 'react';
import RiddlePrev from '../RiddleDet/RiddleHomePrev/RiddlePrev.jsx'


function RiddlesList({riddles}) {
    return ( 
        <div className={'riddlesList'}>
            {riddles.map(riddle=> {
                return <RiddlePrev title={riddle.title} comments={riddle.comments} date={riddle.publish} text={riddle.text}/>
            })}
        </div>
     );
}

export default RiddlesList;