import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
      <Route path="/about" element={<div>About Us</div>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;