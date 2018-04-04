import React from 'react';
import {Link,NavLink} from 'react-router-dom';


const Navigation = (props) => {
	//create function that calls the performSearch function passed down from app.js and passes category parameter to search for
	let showImages = (category) => {
		props.showCategory(category);
	}

	return (
		//create NavLinks to a path that matches the query to search
		//add onClick event that triggers the perform search function passed from app.js to the showCategory() function with the parameter set as the query to search for
		<nav className="main-nav">
	    <ul>
	      <li><NavLink to="/cats" onClick={() => {showImages('cats');}}>Cats</NavLink></li>
	      <li><NavLink to="/dogs" onClick={() => {showImages('dogs');}}>Dogs</NavLink></li>
	      <li><NavLink to="/computers" onClick={() => {showImages('computers');}}>Computers</NavLink></li>
	      <li><NavLink exact to="/Search">Search</NavLink></li>
	    </ul>
	  </nav>
	);
}







export default Navigation;