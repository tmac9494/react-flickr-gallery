import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import {Router,BrowserRouter} from 'react-router-dom';
import apiKey from './config.js';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state= {
      pics: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
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

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.performSearch}/>
        <Navigation />
        <PhotoContainer data={this.state.pics} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
