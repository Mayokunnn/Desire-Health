import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Form from "./Form";
import Client from "./Client";
import Worker from "./Worker";

export default function Register() {
  const [options, setOptions] = useState("");
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setOptions(option);
    navigate(`/${option}`);
  };

  return (
    <div className="grid grid-cols-2 px-24 py-6 gap-8">
      <div className="flex flex-col items-center">
        <p className="text-2xl">
          Join us in revolutionizing healthcare delivery, in your world and
          others, one virtual visit at a time.{" "}
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-80"
        />
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
        {!options && <Form type="register" setOptions={handleOptionSelect} />}
        {options === "client" && <Client />}
        {options === "worker" && <Worker />}
      </div>
    </div>
  );
}
