import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostDetails from './PostDetails'
import Createpost from './Createpost'
import EditPost from './EditPost'
import Profile from './Profile'
import Home from './Home'
import PostNavbar from '../components/PostNavbar'
import ProtectedRoute from '../Utils/ProtectedRoute'

const Layout = () => {
  return (
    <>
      <PostNavbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/posts/post/:id' element={<PostDetails />} />
          <Route path='/createpost' element={<Createpost />} />
          <Route path='/post/editpost/:id' element={<EditPost />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </>
  )
}

export default Layout