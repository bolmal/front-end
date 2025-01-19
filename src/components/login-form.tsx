'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Button from './button';
import { useRouter } from 'next/navigation';
import { useStore } from '@/hooks/useUserInfo';
import { useEffect } from 'react';

interface HookFormType {
    id: string;
    password: string;
}

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
    } = useForm<HookFormType>();
    const checkIdPw = () => {
        setError('password', { message: '비밀번호 또는 아이디가 일치하지 않습니다' });
    };

    const toSignUp = () => {
        router.push('/sign-up');
    };

    const login = useStore((state) => state.login);
    const userName = useStore((state) => state.name);
    useEffect(() => {
        if (userName) {
            console.log('유저이름 :', userName);
        }
    }, [userName]);

    const onValid: SubmitHandler<HookFormType> = () => {
        const id = getValues('id');
        const pw = getValues('password');
        login(
            1, // userId
            id, // userName (여기선 id 값 사용)
            '2024-03-14', // onCommingDate
            5, // alarmTicketCnt
            3, // zzimTicketCnt
            false // isSubscribe
        );
        // 로그인 성공 시 홈으로 페이지 이동
        router.push('/');
        console.log('ok', id, pw);
        /* 
        실제 API 사용할 때 예시
        try {
        // API 호출 예시
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password: pw }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const userData = await response.json();
        
        login(
            userData.id,
            userData.name,
            userData.onCommingDate,
            userData.alarmTicketCnt,
            userData.zzimTicketCnt,
            userData.isSubscribe
        );

        router.push('/');
    } catch (error) {
        console.error('Login error:', error);
        checkIdPw();
    }
        */
    };
    const onInValid: SubmitErrorHandler<HookFormType> = () => {
        console.error('no');
        checkIdPw();
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col" onSubmit={handleSubmit(onValid, onInValid)}>
                <div className="flex flex-col gap-2">
                    <input
                        {...register('id', {
                            required: true,
                            minLength: 4,
                            maxLength: { value: 16, message: '설정할 에러 메세지' },
                        })}
                        placeholder="아이디"
                        type="text"
                        className="bg-bg-default w-[500px] h-[64px] rounded-[20px] border-[1px]"
                    />
                    <input
                        {...register('password', { required: true, minLength: 8, maxLength: 16 })}
                        placeholder="비밀번호"
                        type="password"
                        className="bg-bg-default w-[500px] h-[64px] rounded-[20px] border-[1px]"
                    />
                </div>
                <div className="flex flex-row gap-2 mt-5 mb-9">
                    <input type="checkbox" />
                    <div className="flex flex-row w-full justify-between">
                        <p>아이디 저장</p>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                </div>
                <Button size="large">로그인</Button>
            </form>
            <div className="flex flex-row gap-2 mt-10">
                <button className="text-[#686868]">아이디 찾기</button>
                <p className="text-[#C7C7C7]">|</p>
                <button className="text-[#686868]">비밀번호 찾기</button>
                <p className="text-[#C7C7C7]">|</p>
                <button onClick={toSignUp} className="text-[#ff4869]">
                    회원가입
                </button>
            </div>
            <div>
                <button>카카오</button>
                <button>네이버</button>
            </div>
        </div>
    );
}
