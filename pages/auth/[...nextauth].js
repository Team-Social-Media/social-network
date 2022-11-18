import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers';

export default NextAuth ({

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_ECRET
    })
  ],
})

// export default NextAuth(authOptions);