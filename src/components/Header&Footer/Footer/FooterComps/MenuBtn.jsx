import { Button } from '@material-ui/core';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

export default function MenuBtn() {
    return (
        <div className={'footer-menu__menuBtn'}>
            <Button>
                <FiMenu/>
            </Button>
        </div>
    )
};
