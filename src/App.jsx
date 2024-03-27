import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Onboarding from "./pages/Onboarding";
import Login from "./components/Login";


function App() {


  return (
    <div className="open-sans">
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="onboarding" element={<Onboarding/>}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
