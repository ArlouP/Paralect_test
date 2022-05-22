
import userReduser from './userReduser';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';



let redusers = combineReducers({
	user: userReduser,

});


let store = createStore(redusers, applyMiddleware(thunk));

window.store = store

export default store;







