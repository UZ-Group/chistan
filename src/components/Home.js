import React from 'react';
import Header from './Header&Footer/Header/Header';
import RiddlesList from './layout/RiddlesList';

class Home extends React.Component {
    render() { 
        return (
        <div>
            <Header/>
            <RiddlesList/>
        </div>
        );
    }
}
 
export default Home;