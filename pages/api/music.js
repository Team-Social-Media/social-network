// require('dotenv').config();

let music = async (req, res) => {

  const axios = require('axios');
  const env = require('env');

  let MUSIC_API = process.env.NEXT_PUBLIC_MUSIC_API
  let MUSIC_Key = process.env.NEXT_PUBLIC_MUSIC_Key
  let MUSIC_Secret = process.env.NEXT_PUBLIC_MUSIC_Secret

  let query = 'Nirvana'

  let url = `${MUSIC_API}q=${query}&key=${MUSIC_Key}&secret=${MUSIC_Secret}`

  // let url = 'https://api.discogs.com/database/search?q=Nirvana&key=ootQuaXkwQxYOmNNPOQW&secret=lSoIQeMUtMUFrJwPHZPfkRNXfhCiVdGe'

  try {

    const res = await axios.get(url)
      .then(response => {
        console.log('response.data: ', response)
      })
  } catch (error) {
    console.error('Error in music.js: ', JSON.stringify(error.message))
  }

}

module.exports = music;