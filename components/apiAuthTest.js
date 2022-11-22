import {getSession} from 'next-auth/react';

// prevents API calls if no user session is detected

export default async function handler(req, res, next) {

  const session = await getSession({req});

  console.log(session);
  
  try {

  
  if (!session) {
    return (
      res.status(401).send('Unauthorized')
    )
  }
  
  next();

  } catch (e) {
    res.status(403).send('Unauthorized')
  }
};