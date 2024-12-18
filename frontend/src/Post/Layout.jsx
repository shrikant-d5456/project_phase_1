import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";
import Createpost from "./Createpost";
import EditPost from "./EditPost";
import Profile from "./Profile";
import Home from "./Home";
import Footer from "../components/Footer";
import PostNavbar from "../components/PostNavbar";
import ProtectedRoute from "../Utils/ProtectedRoute";
import FiveStepValidation from "./FiveStepValidation";
import Practioners from "./Practioners";
import PostSection from "./PostSection";
import SavePost from "./SavePost";
import Allergies from "../components/Allergies";
import Diseases from "../components/Diseases";
const Layout = () => {
  return (
    <>
      <PostNavbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route
            path="/posts/post/post-validatation/:id"
            element={<FiveStepValidation />}
          />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/post/editpost/:id" element={<EditPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/practitioner" element={<Practioners />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<PostSection />} />
          <Route path="/save-post" element={<SavePost />} />
          <Route path="/allergies" element={<Allergies />} />
          <Route path="/diseases" element={<Diseases />} />
          
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
