import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Profile from './containers/Profile/Profile';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/kartik' exact component={Profile} />
        <Route path='/' exact component={Profile} />
        <Redirect to='/kartik' />
      </Switch>
    );

    return (
      <div className='App'>
        <Layout> {routes}</Layout>
      </div>
    );
  }
}

export default App;
