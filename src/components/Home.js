import React from 'react';
import Footer from './Header&Footer/Footer/footer';
import Header from './Header&Footer/Header/Header';
import RiddlesList from './layout/RiddlesList';

class Home extends React.Component {
    render() { 
        return (
        <div>
            <Header/>
            <RiddlesList/>
            <Footer/>
        </div>
        );
    }
}
 
export default Home;