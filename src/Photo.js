import React from 'react';


const Photo = (props) => {
	return (
		<li key={props.data.id}>
    		<img src={`https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`} alt="" />
		</li>    
	);
}









export default Photo;