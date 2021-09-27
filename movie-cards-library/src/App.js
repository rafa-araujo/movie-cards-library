import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    )
  }
}

export default App;
