import React from "react";
import { Typography, Tab, Tabs, ButtonBase} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BsFillDoorOpenFill } from 'react-icons/bs';

const   LOGIN_TAB_VALUE = 1,
        REG_TAB_VALUE = 2;

const AuthPage = () => {
    // <Switch Tabs state 
    const   [value, setValue] = React.useState(LOGIN_TAB_VALUE),
            handleChange = (event, newValue) => {
                setValue(newValue);
            };
    // Switch Tabs state> 
    return (
        <div className={'log-reg-box'}>
            <div className={'log-reg'}>
                <Typography>خوش آمدید</Typography>
                <Link to={'/'}><BsFillDoorOpenFill/></Link>
                <Tabs value={value} onChange={handleChange} className={'log-reg_tabs'} >
                    <Tab label="ورود" value={LOGIN_TAB_VALUE}/>
                    <Tab label="ثبت نام" value={REG_TAB_VALUE} />
                </Tabs>
                {
                value === LOGIN_TAB_VALUE && 
                <div className={'login'}>
                    <input placeholder={'نام کاربری'}/>
                    <input placeholder={'رمز عبور'} type={'password'}/>
                    <ButtonBase>ورود</ButtonBase>
                </div>
                }
                {
                value === REG_TAB_VALUE &&
                <div className={'register'}>
                    <input placeholder={'نام کامل'} />
                    <input placeholder={'نام کاربری'} />
                    <input placeholder={'رمز عبور'} type={'password'} />
                    <input placeholder={'تکرار رمز عبور'} type={'password'} />
                    <ButtonBase >ثبت نام</ButtonBase>
                </div>
                }
            </div>
        </div>
    );
};

export default AuthPage;