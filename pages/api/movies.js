import axios from 'axios';

const movies = async (req, res) => {
  
  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;

  let url = `${MOVIE_API}SearchAll/${MOVIE_Key}/${req.query}`


  try {

    const res = await axios.get(url)
      .then(response => {
        console.log('response.data: ', response.data)
      })
  } catch(error) {
    console.error('Error in movies.js: ', error)
  }

}

export default movies;
