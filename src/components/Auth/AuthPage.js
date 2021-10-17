import React from "react";
import { Typography, Tab, Tabs, ButtonBase} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { toast } from "react-toastify";
import { postCreateUser } from "../../api/api_auth";

const   LOGIN_TAB_VALUE = 1,
        REG_TAB_VALUE = 2;

const AuthPage = () => {
    // <Switch Tabs state 
    const   [value, setValue] = React.useState(LOGIN_TAB_VALUE),
            handleChange = (event, newValue) => {
                setValue(newValue);
            };
    // Switch Tabs state>
    // <Create User
            // <set on reg states 
                const   [userNameReg , setUserNameReg] = React.useState(),
                        [emailReg , setEmailReg] = React.useState(),
                        [passwordlReg , setPasswordReg] = React.useState(),
                        [confPasswordlReg , setConfPasswordReg] = React.useState();
            // set on reg states> 
            // <store in Object
                const handelReg = () => {
                    const user = {
                        "email": emailReg,
                        "username": userNameReg,
                        "password": passwordlReg
                    }
                    function verifyReg(user) {
                        console.log(user)
                        if(!user.username) return "نام کاربری خود را وارد کنید";
                        if(!user.email) return "ایمیل خود را وارد کنید";
                        if(!user.password) return "پسورد خود را وارد کنید";
                        if(!confPasswordlReg) return "پسورد خود را تکرار کنید";
                        if(confPasswordlReg !== passwordlReg) return "تکرار پسورد اشتباه است";
                    };
                    const error = verifyReg(user);
                    if(error) return alert(error);
                    postCreateUser(user, (isOk,data)=> {
                        if(!isOk) return toast.error(data);
                    })
                }
            // store in Object>

    // Create User>
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
                    <input placeholder={'نام کاربری'} value={userNameReg} onChange={e=> setUserNameReg(e.target.value)} />
                    <input placeholder={'ایمیل'} type={'email'} value={emailReg} onChange={e=> setEmailReg(e.target.value)} />
                    <input placeholder={'رمز عبور'} type={'password'} value={passwordlReg} onChange={e=> setPasswordReg(e.target.value)} />
                    <input placeholder={'تکرار رمز عبور'} type={'password'} value={confPasswordlReg} onChange={e=> setConfPasswordReg(e.target.value)} />
                    <ButtonBase onClick={handelReg} >ثبت نام</ButtonBase>
                </div>
                }
            </div>
        </div>
    );
};

export default AuthPage;