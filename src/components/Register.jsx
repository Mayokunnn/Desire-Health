import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Form from "./Form";
import Client from "./Client";
import Worker from "./Worker";

export default function Register() {
  const [options, setOptions] = useState("");

  return (
    <div className="inline-block lg:grid lg:grid-cols-2 px-4 lg:px-24 lg:py-6 gap-2">
      <div className="hidden lg:flex flex-col items-center">
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
      <div className="block lg:flex items-start justify-center">
        {options ? null : <Form type="register" setOptions={setOptions} />}

        {options && (
          <div>
            <Routes>
              <Route path="/" element={<Outlet />} />
              <Route path="client" element={<Client />} />
              <Route path="worker" element={<Worker />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}
