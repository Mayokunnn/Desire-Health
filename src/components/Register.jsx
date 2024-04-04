import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Form from "./Form";
import Client from "./Client";
import Worker from "./Worker";

export default function Register() {
  const [options, setOptions] = useState("");

  return (
    <div className="grid grid-cols-6/10-4/10 px-24 py-2 gap-2">
      <div className="flex flex-col items-center">
        <p className="text-3xl">
          Join us in revolutionizing healthcare delivery, in your world and
          others, one virtual visit at a time.
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-96"
        />
      </div>
      <div className="flex items-start justify-center">
        {options ? null : <Form type="register" setOptions={setOptions} />}

        <div>
          <Routes>
            <Route path="/" element={<Outlet />} />
            <Route path="client" element={<Client />} />
            <Route path="worker" element={<Worker />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
