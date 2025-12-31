import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import WelcomeMsg from "./components/WelcomeMsg";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* This renders ONLY when path = "/" */}
          <Route index element={<WelcomeMsg />} />

          <Route path="request_dash" element={<Dashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
