import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  USERSlice = createSlice({
  name: 'users',
<<<<<<< HEAD
  initialState: {
  },
=======
  initialState: [],
>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275
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
<<<<<<< HEAD
=======

>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275
          })
          console.log('find by name from acessDB slice : ',user);
        } catch (err) {
          console.log('find by username(getone) from accessDB failed!');
        }
      }
    },
<<<<<<< HEAD
    upsertUser: (state,data) => {
      console.log('upsert user');
      try{
        prisma.users.upsert({
        where: {
          id: [data.id],
=======
    upsertUser: (state, data) => {
      console.log('upsert user');
      try{
        const prisma = new PrismaClient()
        prisma.users.upsert({
        where: {
          email: [data.email],
>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275
        },
        create: {
          id: [data.id],
          name: [data.name],
          image: [data.image],
          email: [data.email],
          email_verified:'',
<<<<<<< HEAD
          favorites:[data.favorites],
=======
          favorites:[...data.favorites],
>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275
          friends:[data.friends],
          comments:[data.comments],
          posts:[data.posts],
          accounts:[data.accounts],
          sessions:[data.sessions],
        }
      })
    }
    catch(err){
<<<<<<< HEAD
      console.log("ERROR in upsert user");
    }
=======
      console.log("ERROR in upsert users", err.message);
    }
    },
    favorites: (state = initialState, action) => {
      return [...state, ...action.payload]
>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275
    }
  }
})

<<<<<<< HEAD
export const { getAll,getOne,upsertUser } = USERSlice.actions
=======
export const { getAll,getOne,upsertUser, favorites } = USERSlice.actions
>>>>>>> 3e917f731f029fd082020dd76c58599a0a1cb275

export default USERSlice.reducer

