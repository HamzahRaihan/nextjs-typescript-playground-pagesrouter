import { signIn, signInWithGoogle } from '@/lib/firebase/service';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

type UserData = {
  fullname: string;
  email: string;
  image: string;
  type: string;
  role: string;
};

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
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email });
        const passwordConfirm = await compare(password, user.password);
        console.log(user);
        if (passwordConfirm) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials') {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === 'google') {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: 'google',
        };
        await signInWithGoogle(data, (result: { status: string; message: string; data: UserData }) => {
          if (result.status == 'success') {
            token.email = result.data.email;
            token.fullname = result.data.fullname;
            token.type = result.data.type;
            token.image = result.data.image;
            token.role = result.data.role;
          }
        });
        console.log(data);
      }

      return token;
    },
    async session({ session, token }: any) {
      if ('email' in token && session.user) {
        session.user.email = token.email;
      }
      if ('fullname' in token && session.user) {
        session.user.fullname = token.fullname;
      }
      if ('image' in token && session.user) {
        session.user.image = token.image;
      }
      if ('role' in token && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOptions);
