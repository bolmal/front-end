import Ad from '@/components/ad';
import Profile from '@/components/profile/profile';

export default function Home() {
    return (
        <div>
            <div className="bg-bg-default flex py-[20px] px-[120px] justify-between">
                <Ad></Ad>
                <Profile></Profile>
            </div>
        </div>
    );
}
