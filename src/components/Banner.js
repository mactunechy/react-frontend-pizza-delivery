/*
*A simple Bunner Functional component
*
*/

//Dependencies
import React from 'react';


const Banner = props => {
	return (
		<div className="banner">
			<div className="container">
				<h2 className="logo-font">
					{props.appName.toLowerCase()}
				</h2>
				<p>Get your Food Delivery right to you</p>
			</div>
		</div>
	)
}


//Exportation of hte Component
export default Banner;