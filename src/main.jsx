import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Overview from "./pages/Overview";
import Tickets from "./pages/Tickets";
import RestOfCode from "./components/RestOfCode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/ideas" element={<RestOfCode />} />
                <Route path="/contacts" element={<RestOfCode />} />
                <Route path="/agents" element={<RestOfCode />} />
                <Route path="/article" element={<RestOfCode />} />
                <Route path="/settings" element={<RestOfCode />} />
                <Route path="/subscription" element={<RestOfCode />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
