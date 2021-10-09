import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import { Link } from 'react-router-dom';

function RiddlePrev() {
    return ( 
        <div className={'riddlesList_prev'}>
            <Link>
                <h2>عنوان معمای اول</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                <div className={'riddlesList_det'}>
                    <div><FaCalendar/><span>1400/8/8</span></div>
                    <div><span>25</span><MdQuestionAnswer/></div>
                </div>
            </Link>
        </div>
     );
}

export default RiddlePrev;