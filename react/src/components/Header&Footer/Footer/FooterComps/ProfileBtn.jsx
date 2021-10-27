import { Button, ButtonBase } from '@material-ui/core';
import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { RiLoginCircleFill } from 'react-icons/ri';
import { Drawer } from '@material-ui/core';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { postLogoutUser } from '../../../../api/api_auth';

function ProfileBtn({history}) {

    const [handleDrawer, setHandleDrawer] = React.useState(false);

    function logOut() {
        postLogoutUser();
        localStorage.clear();
        toast.info('با موفقیت از اکانت خود خارج شدید');
        history.push('/Auth');
    }

    return (
        <div className={'footer-menu__profileBtn'}>
            <Button onClick={()=>setHandleDrawer(true)}>
                <HiUserCircle/>
            </Button>
            <Drawer className={'drawer-right'} anchor={'right'} open={handleDrawer} onClose={()=>setHandleDrawer(!handleDrawer)}>
                <ul>
                    <li>
                        <ButtonBase onClick={logOut}><RiLoginCircleFill/>خروج</ButtonBase>
                    </li>
                </ul>
            </Drawer>
        </div>
    )
}


export default withRouter(ProfileBtn);