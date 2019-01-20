/*
* React and Redux Practise
*/

//Dependencies
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';

//defining the default state
const defaultState = {checked:false};

//defining the reducer
const reducer = (state=defaultState,action) => {
	switch(action.type){
		case 'TOGGLE':
			return {...state,checked:!state.checked}
	default:
			return state;	
	
	}
};

//creating the store
const store = createStore(reducer);


class App extends React.Component {
	constructor(){
		super();
		this.state ={};
	};
	componentWillMount(){
		//linking the local state to the state we get from the store
		store.subscribe(()=> this.setState(store.getState()));
	}
	render(){
		const onClick = () => store.dispatch({type:'TOGGLE'});
		return(
			<div>
				<h3>Learning redux</h3>
				<input type="checkbox"
				 checked={!!this.state.checked}
				onClick={onClick}
				  />
				{
					this.state.checked ? (<h4>Done</h4>) : null
				}
			</div>
		)
	}
}

ReactDOM.render(
	(<App/>),
	document.getElementById("root")
);









