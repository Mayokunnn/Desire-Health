
import LoginForm from "./LoginForm";

export default function Login({setUser}) {


  return (
    <div className="inline-block lg:grid grid-cols-2  lg:px-24 lg:py-6 gap-8">
      <div className="hidden lg:flex flex-col items-center">
        <p className="text-3xl">
          Join us in revolutionizing healthcare delivery, in your world and
          others, one virtual visit at a time.{" "}
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-80"
        />
      </div>
      <div className="block lg:flex items-start justify-center">
        <LoginForm type="login" setUser={setUser} />
      </div>
    </div>
  );
}
