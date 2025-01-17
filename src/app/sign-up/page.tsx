import Button from '@/components/button';

export default function SignUp() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col w-full max-w-md mx-auto gap-11">
                <div className="flex flex-col justify-center items-center">
                    <p className="font-[600] text-[25px]">정보를 입력해 회원가입을 완료해 주세요.</p>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">아이디</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                        <Button size="small">중복 확인</Button>
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">비밀번호</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">비밀번호 확인</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">이름</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">아이디</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">성별</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">생년월일</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">이메일</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                    </div>
                </div>
                <div className="w-[500px]">
                    <p className="font-[600] text-[20px]">휴대폰 번호</p>
                    <div className="flex flex-row">
                        <input className="w-full" />
                        <input className="w-full" />
                        <input className="w-full" />
                        <Button className="w-full" size="small">
                            인증하기
                        </Button>
                    </div>
                </div>
                <Button size="large">회원가입 완료</Button>
            </div>
        </div>
    );
}
