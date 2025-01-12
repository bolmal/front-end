'use client';

import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const { register } = useForm();
    return (
        <div className="flex flex-col gap-2">
            <form>
                <input placeholder="아이디" type="text" />
                <input placeholder="비밀번호" type="password" />
                <button>체크표시</button>
                <p>아이디 저장</p>
                <button type="submit">로그인</button>
            </form>
            <div className="flex">
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
