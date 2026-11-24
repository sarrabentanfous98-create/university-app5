
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Etudiants from "./pages/Etudiants";
import DetailEtudiant from "./pages/DetailEtudiant";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";

import { StudentProvider } from "./context/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>

        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/etudiants" element={<Etudiants />} />

          <Route
            path="/etudiants/:id"
            element={<DetailEtudiant />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
