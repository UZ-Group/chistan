import React, { Component } from 'react';
import HomeBtn from './FooterComps/HomeBtn';
import MenuBtn from './FooterComps/MenuBtn';
import ProfileBtn from './FooterComps/ProfileBtn';

export default class Footer extends Component {
    render() {
        return (
            <div className={'footer-menu'}>
                <ProfileBtn/>
                <HomeBtn/>
                <MenuBtn/>
            </div>
        )
    }
}
