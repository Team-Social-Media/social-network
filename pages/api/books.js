

const books = async (req, res) => {
  
  console.log('req: ', req)

  const axios = require('axios');
  const env = require('env');

  let BOOKS_API = process.env.NEXT_PUBLIC_BOOKS_API;
  let BOOKS_Key = process.env.BOOKS_Key;
  let query = req.query || 'lord of the rings';

  const queryFormatter = (string) => {
    if(string){
      string.split(' ');
      string.join('+');
    }
  }

  let fQuery = queryFormatter(query);

  let url = `${BOOKS_API}${fQuery}`;

  try {

    const res = await axios.get(url)
      .then(response => {
        console.log('response.data: ', response.data)
      })
  } catch(error) {
    console.error('Error in books.js: ', error)
  }
}


module.exports = books;
