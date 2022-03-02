import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Register from "./Register";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import JobListingEmployer from "./JobListingEmployer";
import JobListing from "./JobListing";
import Header from "./Header";
import Footer from "./Footer";
import CreateCV from "./CreateCV";
import CreateLFJobPost from "./CreateLFJobPost";
import CreateJobPost from "./CreateJobPost";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/job-listing-employer"
            element={<JobListingEmployer />}
          />
          <Route path="/job-listing" element={<JobListing />} />
          <Route path="/create-cv" element={<CreateCV />} />
          <Route path="/create-lf-job-post" element={<CreateLFJobPost />} />
          <Route path="/create-job-post" element={<CreateJobPost />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
