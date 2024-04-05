import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";
import Client from "./components/Client";
import Organisation from "./components/Organisation";
import ForgotPassword from "./components/ForgotPassword";

const Onboarding = lazy(() => import("./pages/Onboarding"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

function App() {
  return (
    <div className="open-sans">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="onboarding"
            element={
              <Suspense fallback={<Loader />}>
                <Onboarding />
              </Suspense>
            }
          >
            <Route index element={<Navigate replace to="login" />} />
            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="register/*"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            >
              <Route
                path="client"
                element={
                  <Suspense fallback={<Loader />}>
                    <Client />
                  </Suspense>
                }
              />
              <Route
                path="worker"
                element={
                  <Suspense fallback={<Loader />}>
                    <worker />
                  </Suspense>
                }
              />
              <Route
                path="organisation"
                element={
                  <Suspense fallback={<Loader />}>
                    <Organisation />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="reset"
              element={
                <Suspense fallback={<Loader />}>
                  <ForgotPassword />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
