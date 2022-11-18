
import music from './api/music';
import books from './api/books';
import movies from './api/movies';


const Testing = () => {


  return(
  <div>
    <h1>Testing</h1>
    <button onClick={() => music()} >music</button>
    <button onClick={() => movies()} >movies</button>
    <button onClick={() => books()} >books</button>
  </div>
  )
}


export default Testing;