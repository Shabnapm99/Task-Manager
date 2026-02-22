import React, { useEffect, useState } from 'react'
import Root from './routes/Root'
import Home from './pages/Home'
import MyTask from './pages/MyTask'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { useDispatch } from 'react-redux'
import axiosInstance from './api/axios'
import { setIsLoggedin, setAuthUser } from './features/userSlice.js'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/tasks',
          element: <MyTask />
        }

      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },

  ]

)

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true); // Local loading state
  useEffect(() => {

    const token = localStorage.getItem("securedToken");
    if (token) {
      let initAuth = async () => {
        try {
          let response = await axiosInstance.get('/auth/profile');//we should pass the token while api calling. then only autherization happen
          dispatch(setIsLoggedin(true));
          dispatch(setAuthUser(response.data.user))

        } catch (error) {
          // token missing or expired → ignore or redirect to login
          console.log(error.message)
          dispatch(setIsLoggedin(false));
          dispatch(setAuthUser(null));
          localStorage.removeItem('securedToken'); // optional cleanup
        } finally {
          setLoading(false); // Finished checking
        }
      }
      initAuth()


    } else {
      setLoading(false); // No token, finished checking
    }


  }, [dispatch]);//to avoid refresh of redux states when refresh page, everytime we refresh this will work and if roken is not expired and presnent in localstorage it will again set authuser and isloggedin true.
  // If we are still checking the token, show a spinner or nothing
  if (loading) return <div>Loading...</div>;



  return (
    <RouterProvider router={router} />
  )
}

export default App