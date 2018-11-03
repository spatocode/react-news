import React, { Component } from 'react';
import { HomePage, TechPage, PoliticsPage, SciPage, BusinessPage, SportsPage, NotFoundPage } from './components/UI/Pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewsIfNeeded } from './actions'
import './stylesheets/App.css';

class App extends Component {
  componentDidMount(){
    const { dispatch, category } = this.props
    dispatch(fetchNewsIfNeeded(category))
  }

  componentDidUpdate(prevProps){
    const { dispatch } = this.props
    if(this.props.category !== prevProps.category){
      dispatch(fetchNewsIfNeeded(this.props.category))
    }
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
  category: state.selectNews.category
})

export default connect(mapStateToProps)(App)