'use client';

import { useStore } from '@/hooks/useUserInfo';
import RecommendLogin from './recommend-login';
import RecommendLogout from './recommend-logout';

export default function NowBolmal() {
    const isLoggedIn = useStore((state) => state.userInfo.isLoggedIn);
    const name = useStore((state) => state.userInfo.name);
    return (
        <div>
            <div className="pt-[10px] mb-[15px] font-[600] text-[25px]">
                {name === '' ? '지금, 볼래말래?' : `${name}님을 위한 추천 티켓`}
            </div>
            <div>{isLoggedIn ? <RecommendLogin></RecommendLogin> : <RecommendLogout></RecommendLogout>}</div>
        </div>
    );
}
