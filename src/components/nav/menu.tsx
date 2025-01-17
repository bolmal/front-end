'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
    const pathname = usePathname();

    const menuItems = [
        { name: '홈', path: '/' },
        { name: '콘서트', path: '/concert' },
        { name: '아티스트', path: '/artist' },
        { name: '티켓팅 꿀팁', path: '/tips' },
    ];

    return (
        <div className="flex gap-8">
            {menuItems.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    className={`font-medium hover:text-primary transition-colors pb-2 ${
                        pathname === item.path ? 'text-primary border-b-2 border-primary-bg' : 'text-gray-600'
                    }`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
