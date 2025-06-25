import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const ProfilePage = async () => {
    // session 을 가져온다.
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log('session: ', session);

    return (
        <div>
            <h1>Profile Page</h1>
            {/*  세션이 없으면 미인증, 세션이 있으면 사용자이름을 표시 */}
            <p>{!session ? 'Not Authenticated' : session.user.name}</p>
            {session && <p>{session.user.email}</p>}
        </div>
    );
};
export default ProfilePage;
