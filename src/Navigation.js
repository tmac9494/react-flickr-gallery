import React from 'react';
import {Link,NavLink} from 'react-router-dom';


const Navigation = (props) => {
	let showImages = (category) => {
		props.showCategory(category);
	}

	return (
		<nav className="main-nav">
	    <ul>
	      <li><NavLink to="/cats" onClick={() => {showImages('cats');}}>Cats</NavLink></li>
	      <li><NavLink to="/dogs" onClick={() => {showImages('dogs');}}>Dogs</NavLink></li>
	      <li><NavLink to="/computers" onClick={() => {showImages('computers');}}>Computers</NavLink></li>
	    </ul>
	  </nav>
	);
}







export default Navigation;