import { Button, ButtonBase } from '@material-ui/core';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Drawer } from '@material-ui/core';
import { withRouter } from 'react-router';

function MenuBtn({history}) {

    const [handleDrawer, setHandleDrawer] = React.useState(false);

    return (
        <div className={'footer-menu__menuBtn'}>
            <Button onClick={()=>setHandleDrawer(true)}>
                <FiMenu/>
            </Button>
            <Drawer className={'drawer-left'} anchor={'left'} open={handleDrawer} onClose={()=>setHandleDrawer(!handleDrawer)}>
                <ul>
                    <li>
                        <ButtonBase onClick={()=> history.push('/AboutUs')} >درباره ی سایت</ButtonBase>
                    </li>
                </ul>
            </Drawer>
        </div>
    )
};
export default withRouter(MenuBtn);