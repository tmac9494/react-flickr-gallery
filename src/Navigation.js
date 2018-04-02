import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = (props) => {
	let showImages = (category) => {
		props.showCategory(category);
	}

	return (
		<nav className="main-nav">
	    <ul>
	      <li><Link to="/" onClick={() => {showImages('cats');}}>Cats</Link></li>
	      <li><Link to="/" onClick={() => {showImages('dogs');}}>Dogs</Link></li>
	      <li><Link to="/" onClick={() => {showImages('computers');}}>Computers</Link></li>
	    </ul>
	  </nav>
	);
}







export default Navigation;