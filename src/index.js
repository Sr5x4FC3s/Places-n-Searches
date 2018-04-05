import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import rootReducer from './reducers/index.js';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
  <MapContainer />
</Provider>, document.getElementById('map-container'));