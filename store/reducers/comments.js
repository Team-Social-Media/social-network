import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  COMMENTSlice = createSlice({
  name: 'comments',
  initialState: {
  },
  reducers: {
    getAll: state => {
      return async() =>{
        try{
          const prisma = new PrismaClient()
          const allComments = await prisma.comments.findMany()
          console.log('allUsers from comment slice : ',allComments);
        }
        catch(err){
          console.log('getAll from comments failed!');
        }
      }
    },
    getOne: commentID => {
      return async () => {
        try {
          const prisma = new PrismaClient()
          const comment = await prisma.comments.findFirst({
            where: { id: commentID },
          })
          console.log('find by id in COMMENTSlice : ',comment);
        } catch (err) {
          console.log('find by commentID(getone) from comments failed!');
        }
      }
    },
    upsertComment: data => {
      console.log('upsert post');
      try{
        prisma.comments.upsert({
        where: {
          id: [data.id],
        },
        create: {
          id: [data.id],
          userID: [data.userID],
          content:[data.content],
          likedBy:[data.likedBy],
        }
      })
    }
    catch(err){
      console.log("ERROR in upsert comment");
    }
    }
  }
})

export const { getAll,getOne,upsertComment } = COMMENTSlice.actions

export default COMMENTSlice.reducer

