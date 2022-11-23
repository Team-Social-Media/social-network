import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  USERSlice = createSlice({
  name: 'users',
  initialState:[],
  // initialState: {
  //   searchData: [],
  // },
  reducers: {
    getAll: table => {
      return async() =>{
        try{
          const prisma = new PrismaClient()
          const allUsers = await prisma.users.findMany()
          console.log('allUsers from acessDB slice : ',allUsers);
        }
        catch(err){
          console.log('getAll from accessDB failed!');
        }
      }
    },
    getOne: (userName) => {
      return async () => {
        try {
          const prisma = new PrismaClient()
          const user = await prisma.users.findFirst({
            where: { name: userName },

          })
          console.log('find by name from acessDB slice : ',user);
        } catch (err) {
          console.log('find by username(getone) from accessDB failed!');
        }
      }
    },
    upsertUser: (state, data) => {
      console.log('upsert user');
      try{
        const prisma = new PrismaClient()
        prisma.users.upsert({
        where: {
          email: [data.email],
        },
        create: {
          id: [data.id],
          name: [data.name],
          image: [data.image],
          email: [data.email],
          email_verified:'',
          favorites:[...data.favorites],
          friends:[data.friends],
          comments:[data.comments],
          posts:[data.posts],
          accounts:[data.accounts],
          sessions:[data.sessions],
        }
      })
    }
    catch(err){
      console.log("ERROR in upsert users", err.message);
    }
    },
    favorites: (state = initialState, action) => {
      // FIXME: this needs to return an object
      return [...state, ...action.payload]
    },
    getSearchData: (state, action) => {
      return {
        ...state,
        searchData: action.payload,
      };
    },
  }
})

export const { getAll,getOne,upsertUser, favorites, getSearchData } = USERSlice.actions

export default USERSlice.reducer
