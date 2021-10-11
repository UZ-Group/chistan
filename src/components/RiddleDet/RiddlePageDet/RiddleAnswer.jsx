import React from 'react'
import { ButtonBase } from '@material-ui/core'
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiFace } from 'react-icons/bi';

export default function RiddleAnswer({username, date, like , dislike , text}) {
    return (
        <div className={'answer'}>
            <div className={'answer__user'}>
                <BiFace/>
                <span>{username}</span>
            </div>
           <p className={'answer__answer'}>{text}</p>
            <div className={'answer__footer'}>
                <span>{date}</span>
                <div className={'answer__btns'}>
                    <div>
                        <ButtonBase><AiTwotoneLike/></ButtonBase>
                        <span>{like}</span>
                    </div>
                    <div>
                        <ButtonBase><AiTwotoneDislike/></ButtonBase>
                        <span>{dislike}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
