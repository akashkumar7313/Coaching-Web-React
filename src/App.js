import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Elementor from "./components/Elementor";
import Student from "./components/Student";
import Offer from "./components/Offer";
import Difference from "./components/Difference";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Contact from "./components/Pages/ContactUs/Contact";
import Location from "./components/Pages/AboutUs/Location";
import Testimonials from './components/Pages/AboutUs/Testimonials';
import Testimonial from './components/Testimonial';
import HindiCource from './components/Pages/Cources/HindiCource';
import EnglishCourse from './components/Pages/Cources/EnglishCourse';
import UrduCource from './components/Pages/Cources/UrduCourse';
import IELTS from './components/Pages/Cources/IELTS';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutUs/location" element={<Location />} />
        <Route path="/AboutUs/testimonials" element={<Testimonials />} />
        <Route path="/Cources/CLTC/hindi/Cource" element={<HindiCource />} />
        <Route path="/Cources/English/Cource" element={<EnglishCourse />} />
        <Route path="/Cources/Urdu/Cource" element={<UrduCource />} />
        <Route path="/Cources/IELTS" element={<IELTS />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Banner />} />
          <Route path="testimonial" element={<Testimonial />} />
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
      <Testimonial/>
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
