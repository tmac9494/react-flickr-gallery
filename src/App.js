import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import apiKey from './config.js';
import axios from 'axios';

class App extends Component {

  //constructor to set state
  constructor() {
    super();
    this.state= {
      pics: [],
      loading: true,
    };
  }

  //run this function when base app component mounts to retrieve the first default of pictures
  componentDidMount() {
    this.performSearch();
  }

  //function that takes a query as a parameter and searches the flickr api for picture related to the query
  performSearch = (query = 'React JS') => {
    this.setState({
      //set loading to true while loading photos
      loading:true,
    });
    //use axios.get to retrieve the api using apiKey variable and query parameter
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        //add new photos to the 'pics' in state and set loading to false to hide temporary loading section
        pics: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      //log errir if there is one 
      console.log('Error fetching and parsing data', error);
    });
  }


  //show search component only load if search nav item is clicked and pass it the perform search function for the submit event
  //have navigation component to hold page nav and pass it perform search function for quick search buttons
  // then check if loading state is true and show loading or pics accordingly
  // pass the photoContainer component the api picture data from this.state.pics
  //have a fallback route for the inital page load that routes exact to '/'
  //if page or path does not exist route to NotFound Component to show 404 error 
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route exact path="/Search" render={() => <SearchForm onSearch={this.performSearch}/>} />
        <Navigation showCategory={this.performSearch}/>
        <Switch>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Route exact path="/:query(cats|dogs|computers|Search)" render={ () => <PhotoContainer data={this.state.pics} />} />
        }
        <Route exact path="/" render={ () => <PhotoContainer data={this.state.pics} />} />
        <Route component={NotFound} /> 
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
