import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
