import LoginForm from '@/components/login-form';

export default function Login() {
    return (
        <div>
            <h1>볼래말래 로고</h1>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md mx-auto p-6">
                    <LoginForm></LoginForm>
                </div>

                <div></div>
            </div>
        </div>
    );
}
