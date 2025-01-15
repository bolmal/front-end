import { create } from 'zustand';

interface UserState {
    id: number;
    name: string;
    isLoggedIn: boolean;
    onComming: string;
    alarmTicket: number;
    zzimTicket: number;
    isSubscribe: boolean;
    login: (
        userId: number,
        userName: string,
        onCommingDate: string,
        alarmTicketCnt: number,
        zzimTicketCnt: number,
        isSubscribe: boolean
    ) => void;
    logout: () => void;
}

export const useStore = create<UserState>((set) => ({
    id: 0,
    name: '',
    isLoggedIn: false,
    onComming: '',
    alarmTicket: 0,
    zzimTicket: 0,
    isSubscribe: false,
    login: (
        userId: number,
        userName: string,
        onCommingDate: string,
        alarmTicketCnt: number,
        zzimTicketCnt: number,
        isSubscribe: boolean
    ) =>
        set({
            id: userId,
            name: userName,
            isLoggedIn: true,
            onComming: onCommingDate,
            alarmTicket: alarmTicketCnt,
            zzimTicket: zzimTicketCnt,
            isSubscribe: isSubscribe,
        }),
    logout: () =>
        set({
            id: 0,
            name: '',
            isLoggedIn: false,
            onComming: '',
            alarmTicket: 0,
            zzimTicket: 0,
            isSubscribe: false,
        }),
}));
