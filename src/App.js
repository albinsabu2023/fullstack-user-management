import "./App.css";
import AddUser from "./components/AddUser";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route path="/adduser" element={<AddUser />} />
          <Route path="" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
