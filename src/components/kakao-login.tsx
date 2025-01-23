'use client';

import useKakaoLogin from '@/hooks/useKakaoLogin';
import { useStore } from '@/hooks/useUserInfo';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoLogin() {
    // const login = useStore((state) => state.login);
    const { data: session } = useSession();
    const handleKakaoLogin = useKakaoLogin();
    const router = useRouter();
    const onComming = useStore((state) => state.onComming);

    useEffect(() => {
        if (session?.user?.email && session?.user.name) {
            handleKakaoLogin(session.user.name, session.user.email);
            if (onComming === '') {
                router.push('/'); // => 여기서 if문 조건 추가 정보 입력 안했을 때로 바꾸고 push 주소 추가 정보 입력 url로 바꾸면 됨
            }
        }
    }, [session, handleKakaoLogin, onComming, router]);
    const loginKakao = async () => {
        await signIn('kakao');
    };

    return <div onClick={loginKakao}>카카오</div>;
}
