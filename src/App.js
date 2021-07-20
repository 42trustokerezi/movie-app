import {MovieState} from './Context/MovieContext';
import Hero from './components/Hero/Hero'
import './App.css';

function App() {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
