import React from 'react';
import { Link } from 'react-router-dom';
import Mouse from './components/Mouse';
import useSWR from 'swr'



const Home = () => {

  const id = 12155;

  const {data,error} = useSWR('http://localhost:3001/posts');



  return (
    <div>
      Home Page
      <br/>
      <Link to={'/productsList/'+ id}>Go to Product</Link>
      {/* <Mouse/> */}
      {error && <p>opps : {error}</p>}
      {data && 
        <ul>
          {data.map( item => <li> {item.title} </li>)}
        </ul>
        }
    </div>
  );
};

export default Home;