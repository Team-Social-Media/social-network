

const books = async () => {

  const axios = require('axios');
  const env = require('env');

  let BOOKS_API = process.env.NEXT_PUBLIC_BOOKS_API;
  let BOOKS_Covers = process.env.NEXT_PUBLIC_BOOKS_Covers
  let query = 'wastelands stephen king';

  const queryFormatter = (string) => {
    if (string.includes(' ')) {
      let newArray = string.split(' ');
      return newArray.join('+');
    }
  }

  let fQuery = queryFormatter(query) || query;

  let url = `${BOOKS_API}${fQuery}`;
  let res;

  try {

    await axios.get(url)
      .then(response1 => {
        // console.log('books response.data.docs[0]: ', response1.data.docs[0])

        res = {
          title: response1.data.docs[0].title,
          author: response1.data.docs[0].author_name[0],
          image: `${BOOKS_Covers}id/${response1.data.docs[0].cover_i}-M.jpg`,
          year: response1.data.docs[0].first_publish_year,
        }
      })
    console.log('books res: ', res)
  } catch (error) {
    console.error('Error in books.js: ', error)
  }
}


module.exports = books;
