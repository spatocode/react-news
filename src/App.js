import React, { Component } from 'react';
import { HomePage, TechPage, PoliticsPage, SciPage, BusinessPage, SportsPage, NotFoundPage } from './components/UI/Pages'
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
              <Route exact path="/" component={HomePage}/>
              <Route path="/technology" component={TechPage}/>
              <Route path="/politics" component={PoliticsPage}/>
              <Route path="/science" component={SciPage}/>
              <Route path="/sports" component={SportsPage}/>
              <Route path="/business" component={BusinessPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </BrowserRouter>
        </DocumentTitle>
      </div>
    );
  }
}

export default App;
