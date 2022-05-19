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
import MyCVs from "./MyCVs";
import { GetCookie } from "./api/user";

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
            element={
              GetCookie("auth") === undefined ? (
                <Login />
              ) : (
                <JobListingEmployer />
              )
            }
          />
          <Route
            path="/job-listing"
            element={
              GetCookie("auth") === undefined ? <Login /> : <JobListing />
            }
          />
          <Route
            path="/create-cv"
            element={GetCookie("auth") === undefined ? <Login /> : <CreateCV />}
          />
          <Route
            path="/my-cvs"
            element={GetCookie("auth") === undefined ? <Login /> : <MyCVs />}
          />
          <Route
            path="/create-lf-job-post"
            element={
              GetCookie("auth") === undefined ? <Login /> : <CreateLFJobPost />
            }
          />
          <Route
            path="/create-job-post"
            element={
              GetCookie("auth") === undefined ? <Login /> : <CreateJobPost />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
