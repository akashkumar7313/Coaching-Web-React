import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Elementor from "./components/Elementor";
import Student from "./components/Student";
import Offer from "./components/Offer";
import Difference from "./components/Difference";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Banner />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="elementor" element={<Elementor />} />
          <Route path="student" element={<Student />} />
          <Route path="offer" element={<Offer />} />
          <Route path="difference" element={<Difference />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Banner />
      <Testimonials />
      <Elementor />
      <Student />
      <Offer />
      <Difference />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;
