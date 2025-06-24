'use server';
import { auth } from '@/lib/auth';

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: 'zozo@email.com',
            password: 'zozo12345',
        },
    });
};

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: 'zozo@email.com',
            password: 'zozo12345',
            name: 'zozo dev',
        },
    });
};
