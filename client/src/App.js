import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Elementary from "./components/Elementary";
import Student from "./components/Student";
import Offer from "./components/Offer";
import Difference from "./components/Difference";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Contact from "./components/Pages/ContactUs/Contact";
import Location from "./components/Pages/AboutUs/Location";
import Testimonials from "./components/Pages/AboutUs/Testimonials";
import Testimonial from "./components/Testimonial";
import HindiCourse from "./components/Pages/Courses/HindiCourse";
import EnglishCourse from "./components/Pages/Courses/EnglishCourse";
import UrduCourse from "./components/Pages/Courses/UrduCourse";
import IELTS from "./components/Pages/Courses/IELTS";
import OurMethod from "./components/Pages/AboutUs/OurMethod";
import OurDirectors from "./components/Pages/AboutUs/OurDirectors";
import SignIn from "./components/admin/SignIn";
import Home from "./components/admin/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutUs/OurDirectors" element={<OurDirectors />} />
        <Route path="/AboutUs/OurMethod" element={<OurMethod />} />
        <Route path="/AboutUs/location" element={<Location />} />
        <Route path="/AboutUs/testimonials" element={<Testimonials />} />
        <Route path="/Courses/CLTC/hindi/Course" element={<HindiCourse />} />
        <Route path="/Courses/English/Course" element={<EnglishCourse />} />
        <Route path="/Courses/Urdu/Course" element={<UrduCourse />} />
        <Route path="/Courses/IELTS" element={<IELTS />} />
        <Route path="/webadmin" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Banner />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="elementary" element={<Elementary />} />
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
      <Navbar />
      <Banner />
      <Testimonial />
      <Elementary />
      <Student />
      <Offer />
      <Difference />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;