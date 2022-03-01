import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Register from "./Register";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import JobListingEmployer from "./JobListingEmployer";
import JobListing from "./JobListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-listing-employer" element={<JobListingEmployer />} />
        <Route path="/job-listing" element={<JobListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
