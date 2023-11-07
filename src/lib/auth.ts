import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";

import TwitchProvider from "next-auth/providers/twitch";
import { db } from "@/lib/drizzle";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
