import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { useLocation } from 'react-router';
import {getAllRiddles} from '../../../api/api_riddle';
import PutAnswer from './PutAnswer';
import RiddleAnswer from './RiddleAnswer';


function RiddlePageDet() {

    const   [getRiddle , setGetRiddle] = React.useState([]),
            location = useLocation(),
            [riddleDetail , setRiddleDetail] = React.useState([]);


            
        React.useEffect(() => {
        getAllRiddles ((isOk, data)=>{
                if(!isOk) return alert(data);
                else {
                    setGetRiddle(data)
                    func(data)
                };});
        }, [])
        const   spliting = location.pathname.split('/Riddle-'),
                toNumber = Number(spliting[1]);
        const func = (data) => {
            const filtering = data.filter((post,index)=> {
                if(post.id === toNumber) return true;
            })
            setRiddleDetail(filtering[0])
        }
        console.log(riddleDetail)

    return (
        <div className={'riddle'}>
            <div className={'riddle-dets'}>
                <h1>{riddleDetail && riddleDetail.title}</h1>
                <div className={'riddle-dets__calender'}><FaCalendar/><span>{riddleDetail && riddleDetail.date}</span></div>
                <p>
                    {riddleDetail && riddleDetail.text}
                </p>
            </div>
            <div className={'put-answer'}>
                <span>جواب چیه ؟</span>
                <PutAnswer/>
            </div>
            <div className={'answers-box'}>
                <span><RiQuestionAnswerFill/>{riddleDetail && riddleDetail.answersCount}</span>
                {
                    riddleDetail && riddleDetail.answers && riddleDetail.answers.map(item=> {
                        return (
                            <RiddleAnswer username={item.userName} date={item.date} like={item.like} dislike={item.dislike} text={item.text} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RiddlePageDet;