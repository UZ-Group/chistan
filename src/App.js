import React, {lazy} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  // Boundle Route's 
  const   Home = lazy(()=>import('./components/Home'));

  return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;