import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
//console.log("test")
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<ChatRoom />} path="/"></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
