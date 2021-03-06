import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { toast } from 'react-toastify';
import { postAnswer } from '../../../api/api_answer';
import { withRouter } from 'react-router';


function PutAnswer({history, updatePage}) {

    const   [answer , setAnswer] = React.useState();
    
    const   spliting = history.location.pathname.split('/Riddle-'),
            toNumber = Number(spliting[1]);
    
    function handelAnswer() {
        if(!answer) return toast.warn('پاسخ خود را ننوشته اید');
        const sendAnswer = {
            "user": localStorage.getItem(['id']),
            "post": toNumber,
            "text": answer,
        }
        postAnswer(sendAnswer, (isOk, data)=> {
            if(!isOk) return toast.warn(data);
            else return (toast.success(data), setAnswer(''));
        })
        updatePage();
        updatePage();
    }
    return (
        <div>
            <textarea name="some things" value={answer} onChange={e=>setAnswer(e.target.value)} placeholder={'پاسخ شما به این معما ...'}></textarea>
            <ButtonBase onClick={handelAnswer}>ثبت پاسخ</ButtonBase>
        </div>
    )
}
export default withRouter(PutAnswer)