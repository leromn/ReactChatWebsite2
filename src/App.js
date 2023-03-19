import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./contacts/contacts";
import Chat from "./chat/chat";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HomeView from "./contacts/homeView";
import ContactForm from "./contacts/contactForm";
import Test from "./test";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
