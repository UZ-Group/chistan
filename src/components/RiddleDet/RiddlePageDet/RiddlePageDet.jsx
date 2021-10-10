import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import RiddleAnswer from './RiddleAnswer';


export default function RiddlePageDet() {
    return (
        <div className={'riddle'}>
            <div className={'riddle-dets'}>
                <h1>عنوان معمای اول</h1>
                <div className={'riddle-dets__calender'}><FaCalendar/><span>1400/8/8</span></div>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
            </div>
            <div className={'answers-box'}>
                <span><RiQuestionAnswerFill/>21</span>
                <RiddleAnswer/>
                <RiddleAnswer/>
                <RiddleAnswer/>
                <RiddleAnswer/>
                <RiddleAnswer/>
            </div>
        </div>
    )
}
