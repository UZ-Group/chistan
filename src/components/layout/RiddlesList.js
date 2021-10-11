import React from 'react';
import RiddlePrev from '../RiddleDet/RiddleHomePrev/RiddlePrev.jsx'


function RiddlesList({riddles}) {
    return ( 
        <div className={'riddlesList'}>
            {riddles.map(riddle=> {
                return <RiddlePrev title={riddle.title} answersCount={riddle.answersCount} date={riddle.date} text={riddle.text} id={riddle.id}/>
            })}
        </div>
     );
}

export default RiddlesList;