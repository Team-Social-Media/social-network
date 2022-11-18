// import React from 'react';
// import {providers, signIn, getSession, csrfToken} from 'next-auth';

// export default function SignIn({providers, csrfToken}){
//   return(
//     <div>
//       <h1 textAlign='center'>
//         Please Sign In
//       </h1>
//       <div alignContent="center" justifyContent="center" marginTop={12}>
//         <div className="email-form">
//           <form method="post" action='/api/auth/signin/email'>
//             <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
//             <label> Email Address</label>
//             <input type ='text' id='email' name='email'/>
//             <button type='submit'>Use your email</button>
//           </form>
//         </div>
//         <div isInline margin={12}>
//           {Object.values(providers).map((provider) => {
//             if(provider.name === 'Email') {
//               return;
//             }

//             return(
//               <div key={provider.name}>
//                 <button variant='outline' onClick={() => signin(provider.id)}>
//                   Sign in with {provider.name}
//                 </button>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// SignIn.getInitialProps = async(context) => {
//   const {req, res} = context
//   const session = await getSession({req});
  
//   if(session && res && session.accessToken){
//     res.writeHead(302, {
//       Location: '/',
//     });
//     res.end()
//     return;
//   }
//   return {
//     session: undefined,
//     providers: await providers(context),
//     // csrfToken: await csrfToken(context), [for email signin only]
//   }
// }