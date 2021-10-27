import React from 'react';
import RiddlePrev from '../RiddleDet/RiddleHomePrev/RiddlePrev.jsx';


function RiddlesList({riddles}) {
    return ( 
        <div className={'riddlesList'}>
            {riddles.map(riddle=> {
                return <RiddlePrev title={riddle.title} comments={riddle.comments} date={riddle.jpublish} text={riddle.text} id={riddle.id} />
            })}
        </div>
     );
}

export default RiddlesList;