import React, { Component } from 'react';
import { Home, Technology, Politics, Science, Business, Sports, NotFound } from './components/Pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentTitle title="React News | Home">
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
        </DocumentTitle>
      </div>
    );
  }
}

export default App;
