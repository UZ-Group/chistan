import { ButtonBase } from '@material-ui/core';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import { Link } from 'react-router-dom';

function RiddlePrev({title, comments, date, text}) {
    return ( 
        <div className={'riddlesList_prev'}>
            <ButtonBase>
                <Link to={`/Riddle-${3}`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className={'riddlesList_det'}>
                        <div><FaCalendar/><span>{date}</span></div>
                        <div><span>{comments.length}</span><MdQuestionAnswer/></div>
                    </div>
                </Link>
            </ButtonBase>
        </div>
     );
}

export default RiddlePrev;