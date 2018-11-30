import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import Home from './screens/Home';

const Navigation = createStackNavigator({
  Home: Home
});

const App = () => (
  <Provider store = {store} >
    <Navigation />
  </Provider>
);

export default App ;