import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credential',
      credentials: {
        email: { label: 'Email', type: 'email' },
        name: { label: 'Fullname', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password, name } = credentials as {
          email: string;
          name: string;
          password: string;
        };
        const user: any = { id: 1, email: email, password: password, name: name };
        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account?.provider === 'credentials') {
        token.email = user.email;
        token.name = user.name;
      }
      console.log(token, account);

      return token;
    },
    async session({ session, token }) {
      if ('email' in token && session.user) {
        session.user.email = token.email;
      }
      if ('name' in token && session.user) {
        session.user.name = token.name;
      }
      console.log(session, token);

      return session;
    },
  },
};

export default NextAuth(authOptions);
