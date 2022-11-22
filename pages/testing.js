
import music from './api/music';
import books from './api/books';
import movies from './api/movies';
import handler from './api/kd_api-test';
//  import ShowAllUsers from './ShowAllUsers';



const Testing = () => {


  return(
  <div>
    <h1>Testing</h1>
    <button onClick={() => music()} >music</button>
    <button onClick={() => movies()} >movies</button>
    <button onClick={() => books()} >books</button>
    <button onClick={() => handler()}>kd_api-test</button>
    {/* <ShowAllUsers /> */}

  </div>
  )
}


export default Testing;