import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
