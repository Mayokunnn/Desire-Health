import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Onboarding from "./pages/Onboarding";
import Button from "./components/Button";


function App() {


  return (
    <div className="open-sans">
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="onboarding" element={<Onboarding/>}>
          <Route path="signin" element={<Button/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
