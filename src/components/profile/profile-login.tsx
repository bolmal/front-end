import { UserInfo } from '@/hooks/useUserInfo';

export default function ProfileLogin({ userInfo }: { userInfo: UserInfo }) {
    return (
        <div className="h-[320px] flex flex-col gap-[10px]">
            <div className="rounded-[20px] bg-white w-[19.58vw] h-[160px] border-[1px] border-[#F0F0F0]">
                <div>{userInfo.imgUrl}</div>
                <div>{userInfo.name}</div>
                <div>{userInfo.isSubscribe ? '구독중' : '미구독'}</div>
                <div>{userInfo.onComming}</div>
            </div>
            <div className="rounded-[20px] bg-white w-[19.58vw] h-[70px] border-[1px] border-[#F0F0F0]">
                <div>알람권: {userInfo.alarmTicket}</div>
            </div>
            <div className="rounded-[20px] bg-white w-[19.58vw] h-[70px] border-[1px] border-[#F0F0F0]">
                <div>찜권: {userInfo.zzimTicket}</div>
            </div>
        </div>
    );
}
