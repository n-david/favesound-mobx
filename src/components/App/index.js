import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Browse from '../../components/Browse';
import Callback from '../../components/Callback';
import Dashboard from '../../components/Dashboard';
import Header from '../../components/Header';
import Player from '../../components/Player';
import Playlist from '../../components/Playlist';
import { browse, dashboard, callback } from '../../constants/pathnames';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={browse} component={Browse} />
          <Route exact path={dashboard} component={Dashboard} />
          <Route exact path={callback} component={Callback} />
          <Redirect to={browse} />
        </Switch>
        <Playlist />
        <Player />
      </div>
    );
  }

}
