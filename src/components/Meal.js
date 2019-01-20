/*
*Single meal component
*
*/

//Dependencies
import React from 'react';


const Meal = props => {
 return (
	<div className="card">
		<h3 className="card-title">
			{props.meal.title}
		</h3>
		<p className="card-body">
			{props.meal.description}
		</p>
		<div className="card-footer text-center">
			<button id={props.meal.mealId} className="btn btn-danger btn-sm btn-round">add</button>
		</div>
		
	</div>
	)
};


//Export the component
export default Meal;