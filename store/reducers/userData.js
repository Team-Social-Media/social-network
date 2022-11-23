import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  USERSlice = createSlice({
  name: 'users',
  initialState: {
  },
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
    upsertUser: (state,data) => {
      console.log('upsert user');
      try{
        prisma.users.upsert({
        where: {
          id: [data.id],
        },
        create: {
          id: [data.id],
          name: [data.name],
          image: [data.image],
          email: [data.email],
          email_verified:'',
          favorites:[data.favorites],
          friends:[data.friends],
          comments:[data.comments],
          posts:[data.posts],
          accounts:[data.accounts],
          sessions:[data.sessions],
        }
      })
    }
    catch(err){
      console.log("ERROR in upsert user");
    }
    }
  }
})

export const { getAll,getOne,upsertUser } = USERSlice.actions

export default USERSlice.reducer

