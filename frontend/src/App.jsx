import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './Utils/UserContext';
import Footer from './components/Footer';
import Login from "./components/Login";
import Signup from './components/Signup';
import AdminLayout from './admin/Layout';
import PostLayout from "./Post/Layout";
import ProtectedRoute from './Utils/ProtectedRoute';

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
        
        <Footer />
      </div>

    </UserContextProvider>
  );
};
export default App;