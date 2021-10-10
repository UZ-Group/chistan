import { Button } from '@material-ui/core';
import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

function ProfileBtn() {
    return (
        <div className={'footer-menu__profileBtn'}>
            <Button>
                <HiUserCircle/>
            </Button>
        </div>
    )
}

export default ProfileBtn;