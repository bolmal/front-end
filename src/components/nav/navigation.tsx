import Image from 'next/image';
import logo from '../../../public/ㅂㄹㅁㄹ.svg';
import UserOption from './user-option';
import Search from './search';
import Menu from './menu';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
            <div className="mx-auto px-20 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Image src={logo} alt="볼래말래" className="cursor-pointer" />
                        <Search />
                    </div>
                    <UserOption />
                </div>
            </div>
            <div className="px-20 py-0">
                <Menu></Menu>
            </div>
        </nav>
    );
}
