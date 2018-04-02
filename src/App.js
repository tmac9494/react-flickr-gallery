import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import {Router,BrowserRouter,Route,Switch} from 'react-router-dom';
import apiKey from './config.js';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state= {
      pics: [],
      loading: true,
      path: '',
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    this.setState({
      loading:true,
      path: query
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo,
        loading: false
      });
      console.log(this.state.pics);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(path=this.state.path) {
    return (
      <BrowserRouter>
      <div className="container">
        <Route path="/search" render={() => <SearchForm onSearch={this.performSearch}/>} />
        <Navigation showCategory={this.performSearch}/>
        <Switch>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Route exact path="/:path" render={ () => <PhotoContainer data={this.state.pics} />} />
        }
        <Route component={NotFound} /> 
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
