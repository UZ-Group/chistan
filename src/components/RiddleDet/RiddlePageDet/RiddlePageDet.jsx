import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { useLocation } from 'react-router';
import {getAllRiddlesID} from '../../../api/api_riddle';
import PutAnswer from './PutAnswer';
import RiddleAnswer from './RiddleAnswer';


function RiddlePageDet() {

    const   [getRiddle , setGetRiddle] = React.useState([]),
            location = useLocation();

        const   spliting = location.pathname.split('/Riddle-'),
        toNumber = Number(spliting[1]);
            
        React.useEffect(() => {
        getAllRiddlesID (toNumber,(isOk, data)=>{
                if(!isOk) return alert(data);
                else {
                    setGetRiddle(data)
                };});
        }, [])

        // console.log(getRiddle.comments);

    return (
        <div className={'riddle'}>
            <div className={'riddle-dets'}>
                <h1>{getRiddle.title}</h1>
                <div className={'riddle-dets__calender'}><FaCalendar/><span>{getRiddle.jpublish}</span></div>
                <p>
                    {getRiddle.text}
                </p>
            </div>
            <div className={'put-answer'}>
                <span>جواب چیه ؟</span>
                <PutAnswer/>
            </div>
            <div className={'answers-box'}>
                <span><RiQuestionAnswerFill/>{getRiddle.comments && getRiddle.comments.length}</span>
                {
                    getRiddle.comments && getRiddle.comments.map(item=> {
                        return (
                            <RiddleAnswer username={item.user.username} date={item.jcreated} like={item.likes} dislike={item.dislikes} text={item.text} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RiddlePageDet;