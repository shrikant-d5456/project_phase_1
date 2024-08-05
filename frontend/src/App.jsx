import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/Createpost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import { UserContextProvider } from './Context/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <div className='lg:text-base text-sm'>
        <Navbar />
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
      </div>
       
    </UserContextProvider>
  );
};

export default App;