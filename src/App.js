import React, { Component } from 'react';
import { HomePage, TechPage, PoliticsPage, SciPage, BusinessPage, SportsPage, NotFoundPage } from './components/UI/Pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewsIfNeeded } from './actions'
import './stylesheets/App.css';

class App extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchNewsIfNeeded())
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news.items
})

export default connect(mapStateToProps)(App)