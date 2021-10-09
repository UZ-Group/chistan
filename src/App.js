import React, {lazy} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Product from './Product';
// import Home from './Home';
// import About from './About';

const App = () => {

  // Boundle Route's 
  const   Home = lazy(()=>import('./Home')),
          About = lazy(()=>import('./About'));

  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path={'/about'} component={About}/>
          <Route path={'/productsList/:id'} component={Product}/>
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;