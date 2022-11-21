'use strict';


module.exports = (req, res, next) => {
  console.log('req: ', JSON.stringify(req));

  let url = '';
  url.split(' ');
  url.join('%20');

  next();
}


