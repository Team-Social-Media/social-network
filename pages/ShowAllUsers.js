import { PrismaClient } from '@prisma/client'


export async function getStaticProps() {
  const prisma = new PrismaClient()
  const allUsers = await prisma.users.findMany()
 //const users=[{name:'blah'},{name:'beepo'}]
  console.log('inside static props users : ', allUsers); 
  return {
    props : { allUsers }
  }
}

const ShowAllUsers= ({allUsers})=>{
  console.log('in showallusers: ', allUsers);
  
    return(
      <ul> 
     {allUsers.map(user => (
       <li key={user.name}>{user.name}</li>
       ))}

    </ul>  
       )
};

export default ShowAllUsers;