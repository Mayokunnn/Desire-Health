import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

import Loader from "./components/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Client from "./components/LandingPage/Client";
import Worker from "./components/LandingPage/Worker";
import Organisation from "./components/LandingPage/Organisation";
import { MainApp } from "./pages/MainApp";
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./features/Dashboard/Dashboard";
// import { Discussions } from "./features/Discussions/Discussions";
import { Resources } from "./features/Resources/Resources";
import { Profile } from "./features/Profile/Profile";
import { Appointments } from "./features/Appointments/Appointments";
import Resource from "./features/Resources/Resource";

const Onboarding = lazy(() => import("./pages/Onboarding"));
const Login = lazy(() => import("./components/LandingPage/Login"));
const Register = lazy(() => import("./components/LandingPage/Register"));
const ForgotPassword = lazy(() =>
  import("./components/LandingPage/ForgotPassword")
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [user, setUser] = useState({});
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
            <Route path="/app" element={<MainApp user={user} />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="discussions" element={<Discussions />} /> */}
              <Route path="appointments" element={<Appointments />} />
              <Route path="resources" element={<Resources />} />
              <Route path="resources/:id" element={<Resource />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/onboarding"
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
                      <Worker />
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
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "15px",
            maxWidth: "400px",
            padding: "16px 20px",
            backgroundColor: "rgb(255, 255, 255)",
            color: "",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
