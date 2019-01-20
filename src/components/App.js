import agent from '../agent';
import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Home from './Home';


const mapStateToProps = state => ({
	appName:state.appName
})

const mapDispatchToProps = dispatch => ({
	onLoad:payload => dispatch({type:'LOAD_MEALS',payload})
})

class App extends React.Component {

	componentWillMount(){
		this.props.onload(agent.MealsList.all())
	}
	
	render(){
		return(
			<div>
				<Header appName={this.props.appName} />
				{this.props.children}
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps )(App);

