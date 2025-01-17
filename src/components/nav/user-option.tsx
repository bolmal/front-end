'use client';

import { useStore } from '@/hooks/useUserInfo';
import Link from 'next/link';

export default function UserOption() {
    const isLoggedIn = useStore((state) => state.isLoggedIn);
    const userName = useStore((state) => state.name);
    const logout = useStore((state) => state.logout);

    if (isLoggedIn) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-primary font-medium">{userName}</span>
                <button onClick={logout} className="text-gray-600 hover:text-primary">
                    로그아웃
                </button>
            </div>
        );
    } else {
        return (
            <Link href="/login" className="text-gray-600 hover:text-primary transition-colors">
                로그인/회원가입
            </Link>
        );
    }
}
