import React, {lazy} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './components/Auth';

const App = () => {

  // Boundle Route's 
  const   Home = lazy(()=>import('./components/Home')),
          RiddlePage= lazy(()=>import('./components/RiddlePage'));

  return (
      <BrowserRouter>
        <Switch>
          <Route path={'/Riddle-:id'} component={RiddlePage}/>
          <Route path={'/Auth'} component={Auth}/>
          <Route path={'/'} component={Home} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
  );
};

export default App;