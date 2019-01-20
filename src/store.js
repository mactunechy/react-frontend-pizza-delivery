/*
* Redux store Manager
*
*/

//Dependencies
import {applyMiddleware,createStore} from 'redux';
import {promiseMiddleware} from './Middleware';


//defining the default state
const defaultState = {
	appName:'licky-licky',
	meals:null
};


//defining the reducer
const reducer = (state=defaultState,action) => {
	switch(action.type){
		case 'LOAD_MEALS':
			return {...state,meals:action.payload.meals}
	default:
			return state;	
	
	}
};

//Defining the middle
const middleware = applyMiddleware(promiseMiddleware);

//creating the store
const store = createStore(reducer,middleware);


//Exporting the store
export default store
