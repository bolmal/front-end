'use client';

import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import React from 'react';
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

interface ValidationCheckboxProps {
    isValid: boolean;
    text: string;
}

// 유효성 체크박스
const ValidationCheckbox = ({ isValid, text }: ValidationCheckboxProps) => {
    return (
        <div className="flex items-center gap-2">
            <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 
                ${isValid ? 'bg-primary' : 'bg-white border-gray-200 border-2'}`}
            >
                {isValid ? (
                    <div className="w-2 h-[5px] border-l-2 border-b-2 border-white transform -rotate-45 mt-[-2px]" />
                ) : (
                    <div className="w-2 h-[5px] border-l-2 border-b-2 border-gray-200 transform -rotate-45 mt-[-2px]" />
                )}
            </div>
            <span className="text-sm">{text}</span>
        </div>
    );
};

export default function SignUp() {
    const router = useRouter();
    const onValid: SubmitHandler<HookFormType> = () => {
        router.push('/login');
    };
    const [passwordValue, setPasswordValue] = React.useState('');
    const { handleSubmit, register } = useForm<HookFormType>({
        mode: 'onChange',
    });

    const validations = {
        hasLetter: /[a-zA-Z]/.test(passwordValue),
        hasNumber: /[0-9]/.test(passwordValue),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue),
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
                <div>
                    <div className="w-[500px]">
                        <p className="font-[600] text-[20px]">비밀번호</p>
                        <div className="flex flex-row">
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    onChange: (e) => setPasswordValue(e.target.value),
                                })}
                                placeholder="영문, 숫자, 특수문자 8-12자"
                                className="p-3 border rounded-[20px] w-full h-[64px]"
                            />
                        </div>
                    </div>
                    <div className="flex mt-2 gap-2">
                        <ValidationCheckbox isValid={validations.hasLetter} text="영문" />
                        <ValidationCheckbox isValid={validations.hasNumber} text="숫자" />
                        <ValidationCheckbox isValid={validations.hasSpecial} text="특수문자" />
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
                        <select
                            defaultValue="default"
                            {...register('gender')}
                            className="p-3 border rounded-[20px] w-full h-[64px]"
                        >
                            <option value="default" disabled>
                                성별을 선택하세요
                            </option>
                            <option value="femail">여성</option>
                            <option value="male">남성</option>
                        </select>
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">생년월일</p>
                    <div className="flex flex-row">
                        <input
                            type="date"
                            {...register('birth')}
                            className="p-3 border rounded-[20px] w-full h-[64px]"
                        />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">이메일</p>
                    <div className="flex flex-row">
                        <input
                            type="email"
                            {...register('email')}
                            className="p-3 border rounded-[20px] w-full h-[64px]"
                        />
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
