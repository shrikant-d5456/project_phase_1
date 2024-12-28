import React from 'react';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import { UserContextProvider } from './Utils/UserContext';
import Login from "./components/Login";
import Signup from './components/Signup';
import AdminLayout from './admin/Layout';
import PostLayout from "./Post/Layout";
import ProtectedRoute from './Utils/ProtectedRoute';
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0

const App = () => {
  return (
    <UserContextProvider>

      <div className='lg:text-base text-sm'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/*' element={<PostLayout />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/admin/*' element={<AdminLayout />} />
          </Route>

        </Routes>
<<<<<<< HEAD
        <Footer />
        {/* <FiveStepValidation/> */}
        <AdminPage/>
      </div>
=======
        
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
       
      </div>

    </UserContextProvider>
  );
};
export default App;