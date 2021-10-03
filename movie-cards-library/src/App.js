import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Movies from './data';

class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <MovieList movies={ Movies }/>
      </div>
    )
  }
}

export default App;
