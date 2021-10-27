import React, { Component } from 'react';
import AuthBtn from './FooterComps/AuthBtn';
import HomeBtn from './FooterComps/HomeBtn';
import MenuBtn from './FooterComps/MenuBtn';
import ProfileBtn from './FooterComps/ProfileBtn';

export default class Footer extends Component {
    render() {
        return (
            <div className={'footer-menu'}>
                {
                    localStorage.getItem('auth_token') ? 
                    <>
                        <ProfileBtn/>
                        <HomeBtn/>
                        <MenuBtn/>
                    </> : 
                    <AuthBtn/>
                }
            </div>
        )
    }
}
