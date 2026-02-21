import React, { useEffect } from 'react'
import Root from './routes/Root'
import Home from './pages/Home'
import MyTask from './pages/MyTask'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { useDispatch } from 'react-redux'
import axiosInstance from './api/axios'
import { setIsLoggedin, setAuthUser } from './features/userSlice.js'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("securedToken");
    if (token) {
      let initAuth = async () => {
        try {
          let response = await axiosInstance.get('/auth/profile');
          dispatch(setIsLoggedin(true));
          dispatch(setAuthUser(response.data.user))

        } catch (error) {
          console.log(error.message)
        }
      }
      initAuth()


    } else {
      return
    }
  }, [])//to avoid refresh of redux states when refresh page, everytime we refresh this will work and if roken is not expired and presnent in localstorage it will again set authuser and isloggedin true.


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

  return (
    <RouterProvider router={router} />
  )
}

export default App