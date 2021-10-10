import React from 'react'
import { ButtonBase } from '@material-ui/core'
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiFace } from 'react-icons/bi';

export default function RiddleAnswer() {
    return (
        <div className={'answer'}>
            <div className={'answer__user'}>
                <BiFace/>
                <span>نام کاربری</span>
            </div>
           <p className={'answer__answer'}>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
           </p>
            <div className={'answer__footer'}>
                <span>1400/8/7</span>
                <div className={'answer__btns'}>
                    <div>
                        <ButtonBase><AiTwotoneLike/></ButtonBase>
                        <span>32</span>
                    </div>
                    <div>
                        <ButtonBase><AiTwotoneDislike/></ButtonBase>
                        <span>15</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
