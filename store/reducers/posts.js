import { PrismaClient } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';

const  POSTSlice = createSlice({
  name: 'posts',
  initialState: {
  },
  reducers: {
    getAll: state => {
      return async() =>{
        try{
          const prisma = new PrismaClient()
          const allPosts = await prisma.state.findMany()
          console.log('allposts from posts slice : ',allPosts);
        }
        catch(err){
          console.log('getAll from posts failed!');
        }
      }
    },
    getOne: (state,postID) => {
      return async () => {
        try {
          const prisma = new PrismaClient()
          const post = await prisma.posts.findFirst({
            where: { id: postID },
          })
          console.log('find by id in POSTSslice : ',post);
        } catch (err) {
          console.log('find by postID(getone) from posts failed!');
        }
      }
    },
    upsertPost: (state,data) => {
      console.log('upsert post');
      try{
        prisma.posts.upsert({
        where: {
          id: [data.id],
        },
        create: {
          id: [data.id],
          title: [data.name],
          image: [data.image],
          description: [data.email],
          content:[data.content],
          favoritedBy:[data.favorites],
          comments:[data.comments],
          rating:[data.rating],
        }
      })
    }
    catch(err){
      console.log("ERROR in upsert posts");
    }
    }
  }
})

export const { getAll,getOne,upsertPost } = POSTSlice.actions

export default POSTSlice.reducer

