import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';
import {createStore, combineReducers} from 'redux';
import ContactReducers from './reducers/contacts'
import { Provider } from 'react-redux';
import Page from './components/page'

const allReducers = combineReducers({
  contacts: ContactReducers
})

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store} >
    <Page />
  </Provider>, 
  document.getElementById('root'));
