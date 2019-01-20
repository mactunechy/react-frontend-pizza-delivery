/*
*Meals list component
*
*/
//Dependencies
import React from 'react';
import Meal from './Meal';

const MealList = props => {
	if(!props.meals){
		return (
			<h4>Loading Meals... </h4>
		)
	}
	if(props.meals.length == 0){
		return (
			<h4>No meals aaded yet..</h4>
		)
	}
	return (
		<div>
		{
			props.meals.map(meal => {
				return <Meal meal={meal} key={meal.mealId}/>
			} )
		}
		</div>
	)
};

//Export the component
export default MealList;