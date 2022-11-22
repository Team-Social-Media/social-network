import { getSession } from 'next-auth/react';

const movies = async (req, res) => {

  const session = await getSession({req});

  console.log(session);
  
  if (!session) {
    return (
      res.status(401).send('Unauthorized')
    )
  }

  const axios = require('axios');
  const env = require('env');

  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;

  console.log('movies.js req.query.title: ', req.query.title)

  let query = req.query.title;

  if (!query) {
    return res.status(400).send({ message: 'Missing movie title in query string' });
  }

  let url = `${MOVIE_API}SearchAll/${MOVIE_Key}/${query}`;
  try {
    console.log('movies.js url: ', url)
    await axios.get(url)
      .then(response => {
        const data = response.data.results.slice(0, 10).map(result => ({
          medium: 'movie',
          title: result.title,
          image: result.image,
          artist: result.title,
          description: result.description,
        }));
        res.status(200).send(data);
        console.log('movies.js data: ', data)
      })
  } catch (error) {
    console.error('Error in movies.js: ', error)
    res.status(500).send([])
  }

}

export default movies;
