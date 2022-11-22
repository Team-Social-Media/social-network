import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  DBSlice = createSlice({
  name: 'database',
  initialState: {
  },
  reducers: {
    getAll: table => {
      return async(dispatch,getState) =>{
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
      return async (dispatch, getState) => {
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
    upsert: (state, action) => {
      console.log('upsert');
    }
  }
})

export const { getAll,getOne,upsert } = DBSlice.actions

export default DBSlice.reducer

