import { Button } from '@material-ui/core';
import React from 'react';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function AuthBtn() {
    return ( 
        <div className={'footer-menu__AuthBtn'}>
            <Button>
                <Link to={'/Auth'}>
                    <BsFillDoorOpenFill/>
                </Link>
            </Button>
        </div>
     );
}

export default AuthBtn;