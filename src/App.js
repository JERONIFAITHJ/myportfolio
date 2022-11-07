import React, { Suspense } from 'react';
import './App.css';
import DrawerAppBarNew from './Components/Navigation/NavBarNew';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import About from './Components/Pages/About';
import LoadingSpinner from './Components/UI/LoadingSpinner';

const Skills = React.lazy(() => import('./Components/Pages/Skills'));
const ContactMe = React.lazy(() => import('./Components/Pages/ContactMe'));

function App() {
  return (
    <div className='App'>
      <DrawerAppBarNew />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/About'></Redirect>
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Skills'>
            <Skills />
          </Route>
          <Route path='/Contact'>
            <ContactMe />
          </Route>
          <Route path='*'>
            <p style={{ marginTop: '47vh', marginLeft: '36vw', fontSize: '30px' }}>Uh oh looks like you're lost! <span><Link className='redirect' to='/About'>Redirect</Link></span></p>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
