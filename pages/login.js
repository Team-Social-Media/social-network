import { Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Login from '../components/Login';
import styles from '../styles/Landing.module.css'

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default function LandingLogin() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/social-media.png" />
      </Head>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid
          item
          xs={3}
        >
          <Card className={styles.login}>
            <div>
              <h1 className={styles.h1}>Welcome to Social Media</h1>
              <h3 className={styles.h3}>Please sign in to get started</h3>
              <div className={styles.button}>
                <Login />
              </div>
            </div>
          </Card>
        </Grid>

      </Grid>
    </>
  );
}
