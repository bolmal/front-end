'use client';

import { useStore } from '@/hooks/useUserInfo';
import Link from 'next/link';

export default function UserOption() {
    const isLoggedIn = useStore((state) => state.isLoggedIn);
    const userName = useStore((state) => state.name);

    if (isLoggedIn) {
        return <div>{userName}</div>;
    } else {
        return <Link href={'/login'}>로그인/회원가입</Link>;
    }
}
