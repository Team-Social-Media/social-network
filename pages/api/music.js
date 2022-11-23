import { getSession } from 'next-auth/react';

// require('dotenv').config();

let music = async (req, res) => {

  const session = await getSession({req});

  console.log(session);
  
  if (!session) {
    return (
      res.status(401).send('Unauthorized')
    )
  }

  const axios = require('axios');
  const env = require('env');

  let MUSIC_API = process.env.NEXT_PUBLIC_MUSIC_API
  let MUSIC_Key = process.env.NEXT_PUBLIC_MUSIC_Key
  let MUSIC_Secret = process.env.NEXT_PUBLIC_MUSIC_Secret

  let query = req.query.search;

  if (!query) {
    return res.status(400).send({ message: 'Missing search string in query' });
  }

  let url = `${MUSIC_API}q=${query}&key=${MUSIC_Key}&secret=${MUSIC_Secret}`

  try {

    let config = {
      url: url,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: {
        'OAuth oauth_consumer_key' : process.env.NEXT_PUBLIC_MUSIC_Key,
        oauth_nonce : "9f7zT3Or9",
        oauth_signature : process.env.NEXT_PUBLIC_MUSIC_Secret,
        oauth_signature_method : "PLAINTEXT",
        oauth_timestamp : Date.now(),
        oauth_callback : process.env.NEXTAUTH_URL,
        },
      'User-Agent': 'SocialApp/1.0.0.0+https://cheerful-paletas-7de42e.netlify.app/',
      }
    }
    console.log('==================',config);
    await axios(config)
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
