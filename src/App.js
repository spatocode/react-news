import React, { Component } from 'react';
import { Home, Technology, Politics, Science, Business, Sports, NotFound } from './components/Pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/technology" component={Technology}/>
            <Route path="/politics" component={Politics}/>
            <Route path="/science" component={Science}/>
            <Route path="/sports" component={Sports}/>
            <Route path="/business" component={Business}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
