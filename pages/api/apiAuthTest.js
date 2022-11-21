import {getSession} from 'next-auth/react';

// prevents API calls if no user session is detected

export default async function handler(req, res) {

  const session = await getSession({req});

  console.log(session);
  
  if (!session) {
    return (
      res.status(401).send('Unauthorized')
    )
  }

  res.status(200).json({ name: 'John Doe' })
}