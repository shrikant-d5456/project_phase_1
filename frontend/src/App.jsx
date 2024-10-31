import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from "./components/Login";
import Signup from './components/Signup';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/Createpost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import { UserContextProvider } from './Context/UserContext';
import FiveStepValidation from './pages/FiveStepValidation';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <UserContextProvider>
      <div className='lg:text-base text-sm'>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/posts/post/:id' element={<PostDetails />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/post/editpost/:id' element={<EditPost />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
        {/* <FiveStepValidation/> */}
        <AdminPage/>
      </div>
       
    </UserContextProvider>
  );
};

export default App;