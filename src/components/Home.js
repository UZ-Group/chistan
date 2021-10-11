import React from 'react';
import {getAllRiddles} from '../api/api_riddle';
import Footer from './Header&Footer/Footer/footer';
import Header from './Header&Footer/Header/Header';
import RiddlesList from './layout/RiddlesList';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            riddlesList : []
        }
    };
    componentDidMount() {
        // <get Riddles
            getAllRiddles((isOk, data)=>{
                if(!isOk) return alert(data);
                else this.setState({riddlesList : data});
            })
        // get Riddles>
    }
    
    render() { 
        console.log(this.state.riddlesList)
        return (
        <div>
            <Header/>
            <RiddlesList riddles={this.state.riddlesList}/>
            <Footer/>
        </div>
        );
    }
}
 
export default Home;