import React from 'react';
import RiddlePrev from '../RiddleDet/RiddleHomePrev/RiddlePrev.jsx'
import { Link } from 'react-router-dom';


function RiddlesList({riddles}) {
    console.log(riddles)
    return ( 
        <div className={'riddlesList'}>
            {riddles.map(riddle=> {
                return <RiddlePrev title={riddle.title} comments={riddle.comments} date={riddle.publish} text={riddle.text} id={riddle.id} />
            })}
        </div>
     );
}

export default RiddlesList;