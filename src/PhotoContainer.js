import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
	return (
	<div className="photo-container">
	    <h2>Results</h2>
	    <ul>
	    	{	//if data from api is 0 then show no results found else the use Photo component and pass props.data(api picture info object) to pics attribute  
	    		(props.data.length === 0)
	    		? <li className="not-found"><h3>No Results Found</h3><p>You search did not return any results. Please try again.</p></li>
	    		: <Photo pics={props.data} />
	    	}

	     
	      
	    </ul>
    </div>
	);
}









export default PhotoContainer;