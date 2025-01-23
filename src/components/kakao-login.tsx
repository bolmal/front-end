'use client';

import useKakaoLogin from '@/hooks/useKakaoLogin';
// import { useStore } from '@/hooks/useUserInfo';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function KakaoLogin() {
    // const login = useStore((state) => state.login);
    const { data: session } = useSession();
    const handleKakaoLogin = useKakaoLogin();

    useEffect(() => {
        if (session?.user?.email && session?.user.name) {
            handleKakaoLogin(session.user.name, session.user.email);
        }
    }, [session, handleKakaoLogin]);
    const loginKakao = async () => {
        await signIn('kakao');
    };

    return <div onClick={loginKakao}>카카오</div>;
}
