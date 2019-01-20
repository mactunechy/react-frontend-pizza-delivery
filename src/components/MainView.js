/*
*Main Content Component
*/

//Dependencies
import MealList from './MealList';
import {connect} from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({meals:state.meals});

const MainView = props => {
	return (
		<div className="col-md-9">
			<div className="feed-toggle">
				<ul className="nav nav-pills outline-active">
					<li className="nav-item" >
						<a href="" className="nav-link active">
							Menu List
						</a>
					</li>
				</ul>
			</div>
			<MealList meals={this.props.meals}/>
		</div>
	)
};

//Export the  Component
export default connect(mapStateToProps, ()=>({}) )(MainView);