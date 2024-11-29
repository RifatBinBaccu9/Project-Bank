import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage/LoginPage"
import BankPage from "./Component/BankPage/BankPage"


function App() {

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/bankPage" element={<BankPage></BankPage>}></Route>
    </Routes>
   </Router>
    </>
  )
}

export default App
