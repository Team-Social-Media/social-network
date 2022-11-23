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
          const allItems = await prisma[table].findMany()
          console.log('allUsers from acessDB slice : ',allItems);
        }
        catch(err){
          console.log('getAll from accessDB failed!');
        }
      }
    },
    getOne: (table,data) => {
      return async () => {
        try {
          const prisma = new PrismaClient()
          const item = await prisma[table].findFirst({
            where: { name: data.name },
          })
          console.log('find by name from acessDB slice : ',item);
        } catch (err) {
          console.log('find by username(getone) from accessDB failed!');
        }
      }
    },
  }
})

export const { getAll,getOne,} = DBSlice.actions

export default DBSlice.reducer

