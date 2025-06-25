import { signIn, signUp } from '@/server/users';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import SignOutButton from '@/components/auth/SignOutButton'; // ************ SignOutButton 가져옴

//  비동기 함수로 변경함
export default async function Home() {
    // session 을 가져온다.
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log('session: ', session);
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signUp}>Sign Up</button>
            {/* ****************** Sign Out Button 추가  */}
            <SignOutButton />
            {/*  세션이 없으면 미인증, 세션이 있으면 사용자이름을 표시 */}
            <p>{!session ? 'Not Authenticated' : session.user.name}</p>
            {session && <p>{session.user.email}</p>}
        </div>
    );
}
