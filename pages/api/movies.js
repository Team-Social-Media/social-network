

const movies = async (req, res) => {
  
  const axios = require('axios');
  const env = require('env');

  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;

  let query = 'shawshank redemption movie';
  
  const queryFormatter = (string) => {
    if(string.includes(' ')){
      let newArray = string.split(' ');
      return newArray.join('%20');
    }
  }
  
  let fQuery = queryFormatter(query) || query;
  
  let url = `${MOVIE_API}SearchAll/${MOVIE_Key}/${fQuery}`;

  try {

    await axios.get(url)
      .then(response => {
        // console.log('movies response.data: ', response.data.results)
        const res = {
          title: response.data.results[0].title,
          image: response.data.results[0].image,
          artist: response.data.results[2].title,
          description: response.data.results[0].description,
        }
        console.log('movies res: ', res)

      })
  } catch(error) {
    console.error('Error in movies.js: ', error)
  }

}

export default movies;
