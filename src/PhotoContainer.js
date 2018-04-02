import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
	return (
	<div className="photo-container">
	    <h2>Results</h2>
	    <ul>
	    	{	(props.data.length === 0)
	    		?<li className="not-found"><h3>No Results Found</h3><p>You search did not return any results. Please try again.</p></li>
	    		:
	    		props.data.map(pic => {
	    			return (
		    			<Photo data={pic} />
	    			);
	    		})
	    	}

	     
	      
	    </ul>
    </div>
	);
}









export default PhotoContainer;