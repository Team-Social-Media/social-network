import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  DBSlice = createSlice({
  name: 'database',
  initialState: {
  },
  reducers: {
    getAll: table => {
      return async() =>{
        try{
          const prisma = new PrismaClient()
          const allUsers = await prisma[table].findMany()
          console.log('allUsers from acessDB slice : ',allUsers);
        }
        catch(err){
          console.log('getAll from accessDB failed!');
        }
      }
    },
    getOne: (table,userName) => {
      return async () => {
        try {
          const prisma = new PrismaClient()
          const user = await prisma[table].findFirst({
            where: { name: userName },
          })
          console.log('find by name from acessDB slice : ',user);
        } catch (err) {
          console.log('find by username(getone) from accessDB failed!');
        }
      }
    },
    upsertUser: (table,data) => {
      console.log('upsert user');
      try{
        prisma[table].upsert({
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
        }
      })
    }
    catch(err){
      console.log("ERROR in upsert user");
    }
    }
  }
})

export const { getAll,getOne,upsert } = DBSlice.actions

export default DBSlice.reducer

