import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { toast } from 'react-toastify';
import { postAnswer } from '../../../api/api_answer';
import { withRouter } from 'react-router';

function PutAnswer({history}) {

    const   [answer , setAnswer] = React.useState();
    
    const   spliting = history.location.pathname.split('/Riddle-'),
            toNumber = Number(spliting[1]);
    
    function handelAnswer() {
        if(!answer) return toast.warn('پاسخ خود را ننوشته اید');
        const sendAnswer = {
            "post": toNumber,
            "text": answer,
        }
        console.log(sendAnswer)
        postAnswer(sendAnswer, (isOk, data)=> {
            if(!isOk) return toast.warn(data);
            else return console.log(data)
        })
    }
    return (
        <div>
            <textarea name="some things" value={answer} onChange={e=>setAnswer(e.target.value)} placeholder={'پاسخ شما به این معما ...'}></textarea>
            <ButtonBase onClick={handelAnswer}>ثبت پاسخ</ButtonBase>
        </div>
    )
}
export default withRouter(PutAnswer)