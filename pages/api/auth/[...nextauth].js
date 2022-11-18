import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import Auth0Provider from 'next-auth/providers/auth0';

import SequelizeAdapter from '@next-auth/sequelize-adapter';
import { Sequelize } from 'sequelize'

const DATABASE_URL = process.env.DATABASE_URL
const sequelize = new Sequelize(DATABASE_URL)


const options = ({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_CLIENT_DOMAIN,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      },
      from: process.env.EMAIL_SERVER_FROM,
    })
  ],

  // custom login page (not working)
  // pages: {
  // //   signIn: '/signin',
  // // },

  secret: process.env.JWT_SECRET,
  adapter: SequelizeAdapter(sequelize),

  database: {
    type: "postgres",
    database: "postgresdb_socialapp",
    synchronize: true,
  }
})

export default (req, res) => NextAuth(req, res, options);
