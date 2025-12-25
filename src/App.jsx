import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import List from "./components/List"
import Edit from "./components/Edit"
import Addform from "./components/Addform"
import Service_status from "./components/Service_status"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Addform />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/srs" element={<Service_status />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
