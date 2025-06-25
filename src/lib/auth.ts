import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db/drizzle'; // your drizzle instance
import { schema } from '@/db/schema';
import { nextCookies } from 'better-auth/next-js'; //  plugin 추가

export const auth = betterAuth({
    socialProviders: {
        google: {
            enabled: true,
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: 'pg', // pg: 는 postgressql을 의미함 or "mysql", "sqlite"
        schema: schema,
    }),
    plugins: [nextCookies()], //  plugin 추가
});
