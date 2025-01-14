import { create } from 'zustand';

interface UserState {
    id: number;
    name: string;
    isLoggedIn: boolean;
    onCommiing: string;
    alarmTicket: number;
    zzimTicket: number;
    isSubscribe: boolean;
    login: (userName: string) => void;
    logout: () => void;
}

export const useStore = create<UserState>((set) => ({
    id: 0,
    name: '',
    isLoggedIn: false,
    onCommiing: '',
    alarmTicket: 0,
    zzimTicket: 0,
    isSubscribe: false,
    login: (userName: string) =>
        set((state) => ({
            ...state,
            name: userName,
            isLoggedIn: true,
        })),
    logout: () =>
        set((state) => ({
            ...state,
            name: '',
            isLoggedIn: false,
        })),
}));
