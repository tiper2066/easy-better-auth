import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request); // session & cookie 를 가져와 저장

    // session & cookie 가 없다면...
    if (!sessionCookie) {
        return NextResponse.redirect(new URL('/', request.url)); // 홈으로 리다이렉트 시킴
    }
    // sessionCookie가 존재하면...
    return NextResponse.next(); // NextResponse.next()가 호출되어 미들웨어에 정의한 함수나 요청된 페이지로 이동하게함
}

export const config = {
    matcher: ['/dashboard'], // 보호해야할 라우팅 경로 설정
};
