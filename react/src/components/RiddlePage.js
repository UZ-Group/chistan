import React, { Component } from 'react';
import Header from './Header&Footer/Header/Header';
import Footer from './Header&Footer/Footer/footer';
import RiddlePageDet from './RiddleDet/RiddlePageDet/RiddlePageDet';

export default class RiddlePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RiddlePageDet/>
                <Footer/>
            </div>
        )
    }
}
