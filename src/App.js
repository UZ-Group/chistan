import React, {lazy} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RiddlePage from './components/RiddlePage';

const App = () => {

  // Boundle Route's 
  const   Home = lazy(()=>import('./components/Home')),
          RiddlePage= lazy(()=>import('./components/RiddlePage'));

  return (
      <BrowserRouter>
        <Switch>
          <Route path={`/Riddle-:id`} component={RiddlePage} />
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;