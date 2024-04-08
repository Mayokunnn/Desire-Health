import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

import Loader from "./components/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Client from "./components/Client";
import Worker from "./components/Worker";
import Organisation from "./components/Organisation";

const Onboarding = lazy(() => import("./pages/Onboarding"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));

const queryClient = new QueryClient({
    defaultOptions : {
      queries: {
        staleTime: 60 * 1000,
      }
    }
})

function App() {
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
    </QueryClientProvider>
  );
}

export default App;
