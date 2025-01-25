import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserInfo {
    id: number;
    name: string;
    isLoggedIn: boolean;
    onComming: string;
    alarmTicket: number;
    zzimTicket: number;
    isSubscribe: boolean;
    imgUrl: string;
}

interface UserState {
    userInfo: UserInfo;
    setUserState: (
        userId: number,
        userName: string,
        onCommingDate: string,
        alarmTicketCnt: number,
        zzimTicketCnt: number,
        isSubscribe: boolean,
        imgUrl: string
    ) => void;
    removeUserState: () => void;
}

export const useStore = create<UserState>()(
    persist(
        (set) => ({
            userInfo: {
                id: 0,
                name: '',
                isLoggedIn: false,
                onComming: '',
                alarmTicket: 0,
                zzimTicket: 0,
                isSubscribe: false,
                imgUrl: '',
            },
            setUserState: (userId, userName, onCommingDate, alarmTicketCnt, zzimTicketCnt, isSubscribe, imgUrl) =>
                set({
                    userInfo: {
                        id: userId,
                        name: userName,
                        isLoggedIn: true,
                        onComming: onCommingDate,
                        alarmTicket: alarmTicketCnt,
                        zzimTicket: zzimTicketCnt,
                        isSubscribe: isSubscribe,
                        imgUrl: imgUrl,
                    },
                }),
            removeUserState: () =>
                set({
                    userInfo: {
                        id: 0,
                        name: '',
                        isLoggedIn: false,
                        onComming: '',
                        alarmTicket: 0,
                        zzimTicket: 0,
                        isSubscribe: false,
                        imgUrl: '',
                    },
                }),
        }),
        {
            name: 'user-storage',
        }
    )
);
