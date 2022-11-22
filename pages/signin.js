import React from 'react';
import { Box, Button, Container, Input, Stack } from '@mui/material';
import {providers, signIn, getSession, csrfToken} from 'next-auth';

export default async function SignIn({providers, csrfToken}){
  return(
    <Container>
      <h1 textAlign='center'>
        Please Sign In
      </h1>
      <Box alignContent="center" justifyContent="center" marginTop={12}>
        <Box className="email-form">
          <form method="post" action='/api/auth/signin/email'>
            <Input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
            <label> Email Address</label>
            <Input type ='text' id='email' name='email'/>
            <Button type='submit'>Use your email</Button>
          </form>
        </Box>
        <Stack isInline margin={12}>
          {Object.values(providers).map((provider) => {
            if(provider.name === 'Email') {
              return;
            }

            return(
              <Box key={provider.name}>
                <Button variant='outline' onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </Button>
              </Box>
            )
          })}
        </Stack>
      </Box>
    </Container>
  )
}

SignIn.getInitialProps = async(context) => {
  const {req, res} = context
  const session = await getSession({req});
  
  if(session && res && session.accessToken){
    res.writeHead(302, {
      Location: '/',
    });
    res.end()
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    // csrfToken: await csrfToken(context),
  }
}