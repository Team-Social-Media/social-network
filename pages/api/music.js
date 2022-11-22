// require('dotenv').config();

let music = async (req, res) => {

  const axios = require('axios');
  const env = require('dotenv').config();

  let MUSIC_API = process.env.NEXT_PUBLIC_MUSIC_API
  let MUSIC_Key = process.env.NEXT_PUBLIC_MUSIC_Key
  let MUSIC_Secret = process.env.NEXT_PUBLIC_MUSIC_Secret

  let query = req.query.search;

  if (!query) {
    return res.status(400).send({ message: 'Missing search string in query' });
  }

  let url = `${MUSIC_API}q=${query}&key=${MUSIC_Key}&secret=${MUSIC_Secret}`

  try {

    await axios.get(url)
      .then(response => {
        console.log('music response.data.results: ', response.data.results)
        const data = response.data.results.slice(0, 10).map(result => ({
          medium: 'music',
          title: result.title,
          image: result.cover_image,
          artist: result.title,
          year: result.year,
        }));
        res.status(200).send(data);
      })
  } catch (error) {
    console.error('Error in music.js: ', JSON.stringify(error.message))
  }

}

module.exports = music;
