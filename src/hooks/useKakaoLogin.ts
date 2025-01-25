'use client';

import { useStore } from './useUserInfo';

export default function useKakaoLogin() {
    const setUserState = useStore((state) => state.setUserState);

    const handleKakaoLogin = (name: string, email: string) => {
        //name과 email로 서버에 fetch하는 내용
        //이 밑은 임시로 로그인하도록 구현
        console.log(email);
        setUserState(1, name, '', 1, 1, true, '');
    };

    return handleKakaoLogin;
}
