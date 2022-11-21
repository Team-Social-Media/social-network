
import music from './api/music';
import books from './api/books';
import movies from './api/movies';
import handler from './api/kd_api-test';
import copyToDB from './copyToDB';


const Testing = () => {
  return(
  <div>
    <h1>Testing</h1>
    <button onClick={() => music()} >music</button>
    <button onClick={() => movies()} >movies</button>
    <button onClick={() => books()} >books</button>
    <button onClick={() => handler()}>kd_api-test</button>
    <button onClick={()=> copyToDB({author:'Simon Pegg'})}>Test writing to books DB</button>

  </div>
  )
}


export default Testing;