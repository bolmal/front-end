'use client';

import useKakaoLogin from '@/hooks/useKakaoLogin';
import { useStore } from '@/hooks/useUserInfo';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoLogin() {
    const { data: session } = useSession();
    const handleKakaoLogin = useKakaoLogin();
    const router = useRouter();
    const onComming = useStore((state) => state.onComming);

    useEffect(() => {
        if (session?.user?.email && session?.user.name) {
            handleKakaoLogin(session.user.name, session.user.email); // 여기서 const response = handle...로 바꾸고 유저정보를 response 안에 반환해주면
            // 여기서 setUserState Store에서 호출해서 반환해준 정보들 담아주고(이건 handleKakaoLogin 로직 안에서 해결할듯)
            if (onComming === '') {
                router.push('/'); // => 여기서 if문 조건 추가 정보 입력 안했을 때로 바꾸고 push 주소 추가 정보 입력 url로 바꾸면 됨
            }
        }
    }, [session, handleKakaoLogin, onComming, router]);
    const loginKakao = async () => {
        await signIn('kakao');
    };

    return <button onClick={loginKakao}>카카오</button>;
}
