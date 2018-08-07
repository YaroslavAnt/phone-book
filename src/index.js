import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import ContactReducers from './reducers/contacts'
import { Provider } from 'react-redux';
import Page from './components/page'

const allReducers = combineReducers({
  contacts: ContactReducers
})

// function reducer(state=allReducers, action){
//   return state
// }

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store} >
    <Page />
  </Provider>, 
  document.getElementById('root'));
