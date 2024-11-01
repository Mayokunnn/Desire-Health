
import LoginForm from "./LoginForm";

export default function Login() {


  return (
    <div className="inline-block lg:grid grid-cols-2  lg:px-24 lg:py-6 gap-8">
      <div className="hidden lg:flex flex-col items-center">
        <p className="text-3xl">
        Join us to innovate pregnancy and birth journey for women, one safe birth at a time.
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-80"
        />
      </div>
      <div className="block lg:flex items-start justify-around">
        <LoginForm type="login" />
      </div>
    </div>
  );
}
