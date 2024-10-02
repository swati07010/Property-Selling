import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import PropertyForm from "./components/PropertyForm/PropertyForm";
import EditProperty from "./components/EditProperty/EditProperty";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/propertyform" element={<PropertyForm />} />
          <Route path="/edit-property/:id" element={<EditProperty />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
