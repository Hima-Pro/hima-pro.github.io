import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import "./assets/css/main.css";
import Admin from "./admin/Admin";
import { Pages } from "./Imports";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/contact" element={<Pages.Contact />} />
        <Route path="/post/:postId" element={<Pages.Post />} />
        <Route path="/projects" element={<Pages.Projects />} />
        <Route path="/settings" element={<Pages.Settings />} />
        <Route path="/skills" element={<Pages.Skills />} />
        <Route path="/donate" element={<Pages.Donate />} />
        <Route path="/NotFound" element={<Pages.Error404 />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  </BrowserRouter>
);
