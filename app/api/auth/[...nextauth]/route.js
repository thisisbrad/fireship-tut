// import { handlers } from "auth";
// export const { GET, POST } = handlers;

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

console.log("ENV", process.env.SPOTIFY_CLIENT_ID);

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add this line
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
