import { Button } from '@material-ui/core';
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function HomeBtn() {
    return ( 
        <div className={'footer-menu__homeBtn'}>
            <Button>
                <Link to={'/'}>
                    <FaQuestionCircle/>
                </Link>
            </Button>
        </div>
     );
}

export default HomeBtn;