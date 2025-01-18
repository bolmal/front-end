'use client';

import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

interface HookFormType {
    id: string;
    password: string;
    passwordCheck: string;
    name: string;
    gender: string;
    birth: string;
    email: string;
    phone1: string;
    phone2: string;
    phone3: string;
    confirmCode: string;
}

export default function SignUp() {
    const router = useRouter();
    const { handleSubmit, register } = useForm<HookFormType>();
    const onValid: SubmitHandler<HookFormType> = () => {
        router.push('/login');
    };
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <form className="flex flex-col w-full max-w-md mx-auto gap-9" onSubmit={handleSubmit(onValid)}>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-[600] text-[25px]">정보를 입력해 회원가입을 완료해 주세요.</p>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">아이디</p>
                    <div className="flex flex-row justify-between">
                        <input
                            {...(register('id'), { required: true, minLength: 4, maxLength: 16 })}
                            placeholder="영어 소문자, 숫자 4-16자"
                            className="p-3 border rounded-[20px] h-[64px] w-[350px]"
                        />
                        <Button size="small">중복 확인</Button>
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">비밀번호</p>
                    <div className="flex flex-row">
                        <input
                            {...register('password')}
                            placeholder="영문, 숫자, 특수문자 8-12자"
                            className="p-3 border rounded-[20px] w-full h-[64px]"
                        />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">비밀번호 확인</p>
                    <div className="flex flex-row">
                        <input {...register('passwordCheck')} className="p-3 border rounded-[20px] w-full h-[64px]" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">이름</p>
                    <div className="flex flex-row">
                        <input {...register('name')} className="p-3 border rounded-[20px] w-full h-[64px]" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">성별</p>
                    <div className="flex flex-row">
                        <input {...register('gender')} className="p-3 border rounded-[20px] w-full h-[64px]" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">생년월일</p>
                    <div className="flex flex-row">
                        <input {...register('birth')} className="p-3 border rounded-[20px] w-full h-[64px]" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">이메일</p>
                    <div className="flex flex-row">
                        <input {...register('email')} className="p-3 border rounded-[20px] w-full h-[64px]" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">휴대폰 번호</p>
                    <div className="flex flex-row gap-2">
                        <div className="w-full flex justify-between">
                            <input {...register('phone1')} className="p-3 border rounded-[20px] w-[110px] h-[64px]" />
                            <input {...register('phone2')} className="p-3 border rounded-[20px] w-[110px] h-[64px]" />
                            <input {...register('phone3')} className="p-3 border rounded-[20px] w-[110px] h-[64px]" />
                            <Button size="small">인증하기</Button>
                        </div>
                    </div>
                </div>
                <Button size="large">회원가입 완료</Button>
            </form>
        </div>
    );
}
