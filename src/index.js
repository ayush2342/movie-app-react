import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore ,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

// const logger = ({dispatch,getState})=>{

//   return (next)=>{

//     return (action)=>{
//       console.log("Action-Type",action.type) 

//       next(action);
//     }
    
//   }

// }


const logger = ({dispatch,getState})=>(next)=>(action)=>{

  if(typeof action !=='function')
    {
    console.log("Action-Type",action.type) 
    }
      next(action);

}

// const thunk = ({dispatch,getState})=>(next)=>(action)=>{

//   if(typeof action ==='function')
//   {
//     action(dispatch)
//     return;
//   }

//       next(action);

// }


const store=createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log("Store",store);
// console.log("State",store.getState())

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Superman"}]
// })

// console.log("State",store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

