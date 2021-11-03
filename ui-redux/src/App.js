import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
