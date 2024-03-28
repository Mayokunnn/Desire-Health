import Form from "./Form";

export default function Login() {
  return (
    <div className="grid grid-cols-2 px-24 py-6 gap-8" >
        <div className="flex flex-col items-center">
          <p className="text-2xl">Join us in revolutionizing healthcare delivery, in your world and others, one virtual visit at a time. </p>
          <img src="/assets/login-illustration.png" alt="Login Illustration" className="max-w-80" />
        </div>
        <div className="flex items-center justify-center">
          <Form type="login"/>
        </div>
    </div>
  )
}
