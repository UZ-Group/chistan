import React, { Component } from 'react';
import AuthPage from './Auth/AuthPage';
import Header from './Header&Footer/Header/Header';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AuthPage/>
            </div>
        )
    }
}
