import connect from './dbconnect';

export default async function copyToDB (req, res){
    try {
        console.log("REQUEST BODY : ", req.body)
        const query = 'INSERT INTO books(author)) VALUES($1)'
        const values = [req.body.author]
        const res = await connect.query(
          query,
          values
        );
      console.log( "RESULT FROM DB : ",res);
      // then return request data to be processes elsewhere

  } catch ( error ) {
      console.log( error );
  }  
};

