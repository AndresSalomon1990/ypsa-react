import React from 'react';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';
import ModelView from './pages/ModelView/ModelView';
import Header from './components/Header/Header';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <main>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path='/webar/suenolar/:category/:product'>
              <ModelView />
            </Route>
            <Route path='/webar/suenolar/:category'>
              <Product />
            </Route>
            <Route path='/webar/suenolar'>
              <Category />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
