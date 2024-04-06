import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";
import ForgotPassword from "./components/ForgotPassword";
import { QueryClient } from "@tanstack/react-query";

const Onboarding = lazy(() => import("./pages/HomePage"));
const HomePage = lazy(() => import("./pages/Onboarding"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

const queryClient = new QueryClient({
    defaultOptions : {
      queries: {
        staleTime: 60 * 1000,
      }
    }
})

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
              path="register"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            >
             
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
