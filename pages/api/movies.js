const movies = async (req, res) => {

  const axios = require('axios');
  const env = require('env');

  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;

  let query = req.query.title;

  if (!query) {
    return res.status(400).send({ message: 'Missing movie title in query string' });
  }

  const queryFormatter = (string) => {
    if (string.includes(' ')) {
      let newArray = string.split(' ');
      return newArray.join('%20');
    }
  }

  let fQuery = queryFormatter(query) || query;

  let url = `${MOVIE_API}SearchAll/${MOVIE_Key}/${fQuery}`;
  console.log(url)
  try {
    await axios.get(url)
      .then(response => {
        console.log(response.data.results)
        const data = response.data.results.slice(0, 10).map(result => ({
          medium: 'movie',
          title: result.title,
          image: result.image,
          artist: result.title,
          description: result.description,
        }));
        res.status(200).send(data);
      })
  } catch (error) {
    console.error('Error in movies.js: ', error)
    res.status(500).send([])
  }

}

export default movies;
