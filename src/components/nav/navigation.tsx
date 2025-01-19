'use client';

import Image from 'next/image';
import logo from '../../../public/ㅂㄹㅁㄹ.svg';
import UserOption from './user-option';
import Search from './search';
import Menu from './menu';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    const isLoginOrSignup = pathname === '/login' || pathname === '/sign-up';

    const handleLogo = () => {
        router.push('/');
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
                {isLoginOrSignup ? (
                    <div className="flex items-center justify-center h-[80px]">
                        <Image onClick={handleLogo} src={logo} alt="볼래말래" className="cursor-pointer" />
                    </div>
                ) : (
                    <>
                        <div className="mx-auto px-20 py-5 h-[80px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-8">
                                    <Image onClick={handleLogo} src={logo} alt="볼래말래" className="cursor-pointer" />
                                    <Search />
                                </div>
                                <UserOption />
                            </div>
                        </div>
                        <div className="px-20 h-[50px]">
                            <Menu />
                        </div>
                    </>
                )}
            </nav>
            {/* 네비게이션 높이만큼 여백 */}
            <div className={isLoginOrSignup ? 'h-[80px]' : 'h-[130px]'} />
        </>
    );
}
