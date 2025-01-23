import { signIn } from 'next-auth/react';

export default function KakaoLogin() {
    const loginKakao = async () => {
        await signIn('kakao');
    };

    return <div onClick={loginKakao}>카카오</div>;
}
