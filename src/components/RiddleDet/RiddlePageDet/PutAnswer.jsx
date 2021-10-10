import { ButtonBase } from '@material-ui/core';
import React from 'react';

export default function PutAnswer() {
    return (
        <div>
            <textarea name="some things" placeholder={'پاسخ شما به این معما ...'}></textarea>
            <ButtonBase>ثبت پاسخ</ButtonBase>
        </div>
    )
}
