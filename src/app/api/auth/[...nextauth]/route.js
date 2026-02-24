import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username || token.name;
        token.imageUrl = user.imageUrl || token.picture;
        token.email = user.email || token.email;
        token._id = user._id ? user._id.toString() : token._id || null;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        _id: token._id || null,
        username: token.username,
        email: token.email,
        imageUrl: token.imageUrl,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
