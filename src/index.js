import React from 'react';
import ReactDOM from 'react-dom';
import { createstore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './compnents/App';
import * as serviceWorker from './serviceWorker';

const store =createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
