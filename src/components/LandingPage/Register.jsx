import { useEffect, useState } from "react";
import Client from "./Client";
import Worker from "./Worker";
import Organisation from "./Organisation";
import RegisterForm from "./RegisterForm";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export default function Register() {
  const [options, setOptions] = useState("");

  useEffect(() => {
    if (location.pathname === "/onboarding/register") {
      setOptions("");
    }
  }, []);

  return (
    <div className="inline-block lg:grid lg:grid-cols-2 px-4 lg:px-24 lg:py-6 gap-2">
      <div className="hidden lg:flex flex-col items-center">
        <p className="text-3xl">
        Join us to innovate pregnancy and birth journey for women, one safe birth at a time.
        </p>
        <img
          src="/assets/login-illustration.png"
          alt="Login Illustration"
          className="max-w-96"
        />
      </div>
      <div className="block lg:flex items-start justify-center">
        {options ? null : (
          <RegisterForm
            type="register"
            setOptions={setOptions}
            options={options}
          />
        )}

        {options && (
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="organisation" element={<Organisation />} />
              <Route path="client" element={<Client />} />
              <Route path="worker" element={<Worker />} />
            </Route>
          </Routes>
        )}

        {!options && <Navigate to="/onboarding/register" replace />}
      </div>
    </div>
  );
}
