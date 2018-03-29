import React from 'react';


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
		    			<li key={pic.id}>
			        		<img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="" />
		    			</li>
	    			);
	    		})
	    	}

	     
	      
	    </ul>
    </div>
	);
}









export default PhotoContainer;