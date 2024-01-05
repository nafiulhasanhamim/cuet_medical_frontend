import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }

        const response = await fetch("http://localhost:5000/login", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const user = await response.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      // console.log({user, token})
      return { ...user, ...token };
    },
    async session({ session, token, user}) {
      // console.log(token.token);
      // console.log({session, token, user})
      // session.user.token = token.token;
      // console.log(token)
      if(token.success) {
        session.user = token.userinfo;
        return session
      }
      return false;
    },
    async signIn({ session, account, profile, email, credentials }) {
      // if (account.provider === "google") {
      //   const { access_token, id_token } = account;
      //   const response = await fetch(
      //     `http://127.0.0.1:8000/api/user/googlelogin?access_token=${access_token}`
      //   );

      //   const user1 = await response.json();
      //   console.log("signin called.........")
      //   // session.user1.response = user1
      //   if(user1?.success===true)
      //   return user1;
      //   else
      //     return false;
      // }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
