import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux'
import reducers from './redux/reducers';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

let myStore = createStore(reducers)

root.render(
  <Provider store={myStore}>
    <App />
    </Provider>
  
);


