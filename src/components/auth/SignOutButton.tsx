'use client';
import { authClient } from '@/lib/auth-client';

const SignOutButton = () => {
    return <button onClick={() => authClient.signOut()}>Sign Out</button>;
};
export default SignOutButton;
