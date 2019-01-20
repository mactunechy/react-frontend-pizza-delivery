/*
*Middleware that intercepts the actions dispatched to the  reducers
*/

//Dependencies


//checks if the input is a promise
const isPromise = (payload) => {
	return payload && typeof(payload.then) == 'function';
}

const promiseMiddleware = store => next => action => {
	if(isPromise(action.payload)){
		action.payload.then(data => {
			action.payload = data;
			store.dispatch(action);
		},
		error => {
			action.error =true;
			action.payload = error.response.body
			store.dispatch(action)
		});
		return;
	}
	next(action);
}

//Exporting the middleware 
export {
	promiseMiddleware
}
