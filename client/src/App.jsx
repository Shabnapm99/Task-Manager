import React from 'react'
import Root from './routes/Root'
import Home from './pages/Home'
import MyTask from './pages/MyTask'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import TaskItem from './components/TaskItem'

function App() {
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
      {
        path: '/tasks/:id',
        element: <TaskItem />
      },
    ]

  )

  return (
    <RouterProvider router={router} />
  )
}

export default App