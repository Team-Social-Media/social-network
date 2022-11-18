// require('dotenv').config();

let music = async (req, res) => {

  const axios = require('axios');
  const env = require('env');

  let MUSIC_API = process.env.NEXT_PUBLIC_MUSIC_API
  let MUSIC_Key = process.env.NEXT_PUBLIC_MUSIC_Key
  let MUSIC_Secret = process.env.NEXT_PUBLIC_MUSIC_Secret

  let query = 'Nirvana lithium'

  let url = `${MUSIC_API}q=${query}&key=${MUSIC_Key}&secret=${MUSIC_Secret}`

  try {

    await axios.get(url)
      .then(response => {
        console.log('music response.data.results: ', response.data.results)
        const res = {
          title: response.data.results[0].title,
          image: response.data.results[0].cover_image,
          artist: response.data.results[2].title,
          year: response.data.results[0].year,
        }
        console.log('music res: ', res)
      })
  } catch (error) {
    console.error('Error in music.js: ', JSON.stringify(error.message))
  }

}

module.exports = music;