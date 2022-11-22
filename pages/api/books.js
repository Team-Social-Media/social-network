import { getSession } from 'next-auth/react';

const books = async (req, res) => {

  const session = await getSession({req});

  console.log(session);
  
  if (!session) {
    return (
      res.status(401).send('Unauthorized')
    )
  }

  const axios = require('axios');
  const env = require('env');

  let BOOKS_API = process.env.NEXT_PUBLIC_BOOKS_API;
  let BOOKS_Covers = process.env.NEXT_PUBLIC_BOOKS_Covers

  let query = req.query.title;

  if (!query) {
    return res.status(400).send({ message: 'Missing book title in query string' });
  }

  const queryFormatter = (string) => {
    if (string.includes(' ')) {
      let newArray = string.split(' ');
      return newArray.join('+');
    }
  }

  let fQuery = queryFormatter(query) || query;

  let url = `${BOOKS_API}${fQuery}`;
  console.log(url);
  try {
    await axios.get(url)
      .then(response => {
        const data = response.data.docs.slice(0, 10).map(result => ({
          medium: 'book',
          title: result.title,
          author: result.author_name[0],
          image: `${BOOKS_Covers}id/${result.cover_i}-M.jpg`,
          year: result.first_publish_year,
        }));
        res.status(200).send(data);
      });
  } catch (error) {
    console.error('Error in books.js: ', error)
  }
}


module.exports = books;
