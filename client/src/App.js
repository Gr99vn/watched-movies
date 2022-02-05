import React from 'react';
import { Provider } from 'react-redux';
import Clock from './components/Clock';
import MovieContainer from './components/MovieContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Clock />
      <MovieContainer />
    </Provider>
  );
}

export default App;
