import { Button } from '@material-ui/core';
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';


function HomeBtn() {
    return ( 
        <div className={'footer-menu__homeBtn'}>
            <Button>
                <FaQuestionCircle/>
            </Button>
        </div>
     );
}

export default HomeBtn;