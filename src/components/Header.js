/*
*Header Component
*
*/

//Dependencies
import React from 'react';



class Header extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-light">
				<div className="container">
					<a href="" className="navbar-brand">
						{this.props.appName.toLowerCase()}
					</a>
				</div>
			</nav>
		)
	}
}



//Export the component
export default Header;

