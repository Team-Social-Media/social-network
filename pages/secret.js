import React from "react";
import { useState, useEffect } from "react";
import { useSession, signOut, getSession } from "next-auth/react";


// Protected route that requires user session data
// could be used to set role requirements for certain pages

const Secret = () => {

  const {data: session, status} = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('api/secret');
      const json = await res.json();

      if(json.content){
        setContent(json.content);
      }
    }
    fetchData();
  }, [session]);

  if (typeof window !== 'undefined' && status) return null;
  
  if (status === 'authenticated') {
    return(
      <div>
        <p>Welcome {session.user.name}.</p>
      </div>
    )
  } else {
  
    return(
      <div>
        <p>You are not signed in.</p>
      </div>
  );
  }
};

export default Secret;

export const getServerSideProps = async (context) =>{
  const session = await getSession(context);
    if (!session){
      return{
        redirect : {
          destination: '/'
        }
      }
    }
  return {
    props: {session},
  }

}
