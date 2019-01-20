/*
* React and Redux Practise
*/

//Dependencies

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';
import {Router, Route} from 'react-router';
import {hashHistory,IndexRoute} from 'reacr-router-dom';
import Home from './components/Home';


ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute  component={Home}/>
				</Route>
			</Router>	

		</Provider>
	),
	document.getElementById("root")
);









