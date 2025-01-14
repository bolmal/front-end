'use client';

import { useForm } from 'react-hook-form';
import Button from './button';

export default function LoginForm() {
    const { register } = useForm();
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <form className="flex flex-col gap-4">
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
                <div className="flex flex-row gap-2">
                    <input type="checkbox" />
                    <p>아이디 저장</p>
                </div>
                <Button size="large">로그인</Button>
            </form>
            <div className="flex flex-row gap-2">
                <button>아이디 찾기</button>
                <p>|</p>
                <button>비밀번호 찾기</button>
                <p>|</p>
                <button>회원가입</button>
            </div>
            <div>
                <button>카카오</button>
                <button>네이버</button>
            </div>
        </div>
    );
}
