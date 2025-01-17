import Image from 'next/image';
import logo from '../../../public/ㅂㄹㅁㄹ.svg';
import UserOption from './user-option';

export default function Navigation() {
    return (
        <div>
            <div>
                <Image src={logo} alt="볼래말래" />
                <input />
            </div>
            <div>
                <UserOption></UserOption>
            </div>
        </div>
    );
}
