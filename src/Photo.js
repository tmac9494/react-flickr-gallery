import React from 'react';


const Photo = (props) => {
	return (
		//loop through props.pics(flickr api picture object) and return a list item containing an img with the src info from the api data
		props.pics.map(pic => {
			return (
				<li key={pic.id}>
		    		<img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="" />
				</li>
			)
		})
	)
}









export default Photo;