import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import CredentialsProvider  from "next-auth/providers/credentials";
import EmailProvider from 'next-auth/providers/email';

//Needed for EmailProvider if we use it
import SequelizeAdapter, {models} from '@next-auth/sequelize-adapter';
import Sequelize, {DataTypes} from 'sequelize'
import fs from 'fs';

// const sequelize = new Sequelize (process.env.DATABASE_URL)

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

    {
      id: 'socialAppProvider',
      name: 'socialApp',
      type: 'oauth',
      version: '2.0',
      scope: 'email',
      params: {grant_type: "authorization_code"},
      accessTokenUrl: '',
      authorizationUrl: '',
      requestTokenUrl: '',
      profileUrl: '',
      clientId: '',
      clientSecret: '',
      profile: '',
      protection: "state",
      credentials: {
        username: {label: 'Email', type: 'text', placeholder: 'jon@doe.com'},
        password: {label: 'Password', type: 'password'},
      }

    },

    // CredentialsProvider({
    //   name: 'Social-App',
    //   credentials: {
    //     username: {label: 'Email', type: 'text', placeholder: 'john@doe.com'},
    //     password: {label: 'Password', type: 'password'},
    //     phoneNumber: {label: 'Phone Number', type:'phoneNumber'}
    //   },
    //   async authorize(credentials){
    //     const url = ''

    //   }
    // }),

  ],

  secret: process.env.JWT_SECRET,

  // pages: {
  //   signIn: '/signin',
  // },

  // callbacks: {

  // },
  
  // events: {
  //   signIn: ({user, account, profile, isNewUser}) => {
  //     console.log(`isNewUser: ${JSON.stringify(isNewUser)}`);
  //   },
  // },

  database: {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,

    // EmailProvider also requires SSL 
    // ssl: {
      
    //   rejectUnauthorized: false,
    //   ca: fs.readFileSync('./ca-certificate.crt').toString()
    // }
  },

  debug: true,
});

export default (req, res) => NextAuth(req, res, options);
