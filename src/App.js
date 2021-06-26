import './App.css';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './addMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
