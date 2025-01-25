import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    userInfo: {
        id: number;
        name: string;
        isLoggedIn: boolean;
        onComming: string;
        alarmTicket: number;
        zzimTicket: number;
        isSubscribe: boolean;
    };
    setUserState: (
        userId: number,
        userName: string,
        onCommingDate: string,
        alarmTicketCnt: number,
        zzimTicketCnt: number,
        isSubscribe: boolean
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
            },
            setUserState: (userId, userName, onCommingDate, alarmTicketCnt, zzimTicketCnt, isSubscribe) =>
                set({
                    userInfo: {
                        id: userId,
                        name: userName,
                        isLoggedIn: true,
                        onComming: onCommingDate,
                        alarmTicket: alarmTicketCnt,
                        zzimTicket: zzimTicketCnt,
                        isSubscribe,
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
                    },
                }),
        }),
        {
            name: 'user-storage',
        }
    )
);
