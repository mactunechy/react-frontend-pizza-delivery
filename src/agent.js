/*
*All Ajax  request related tasks
*
*/

//Dependencies
import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent,global.Promise);

const APP_ROOT = 'http://localhost:8000/api';
const responsePayload = res => res.body;

//App request container
const requests = {
	get : url => superagent.get(`${APP_ROOT}${url}`).then(responsePayload)
}

const MealsList = {
	all:requests.get('meals/all')
}



//Exporting the meals
export default {MealsList};