import React from 'react'
import { ButtonBase } from '@material-ui/core'
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiFace } from 'react-icons/bi';
import { postdisLike, postLike } from '../../../api/like_api';

export default function RiddleAnswer({username, date, like , dislike , text , id , updatePage}) {

    function handleLike() {
        postLike(id, (isOk,data)=> {
            if(!isOk) return alert(data);
        })
        updatePage();
        updatePage();
    }
    function handledisLike() {
        postdisLike(id, (isOk,data)=> {
            if(!isOk) return alert(data);
        })
        updatePage();
        updatePage();
    }
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
                        <ButtonBase onClick={handleLike}><AiTwotoneLike/></ButtonBase>
                        <span>{like.length}</span>
                    </div>
                    <div>
                        <ButtonBase onClick={handledisLike}><AiTwotoneDislike/></ButtonBase>
                        <span>{dislike.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
