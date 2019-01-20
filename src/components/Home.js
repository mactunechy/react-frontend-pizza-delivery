/*
* Home Component
*
*/
//Dependencies
import Banner from './Banner';
import MainView from './MainView';
import {connect} from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({appName:state.appName});

class Home extends React.Component {
	render(){
		return (
			<div className="home-page">
				<Banner appName={this.props.appName} />
				<div className="container page">
					<div className="row">
						<MainView/>
						<div className="col-md-3">
							<div className="sidebar">
							 <h3>Most popular meal</h3>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}


//Export the Component
export default connect(mapStateToProps, () => ({}) )(Home);
