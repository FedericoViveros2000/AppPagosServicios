import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormQueryDebt from './components/FormQueryDebt.jsx';
import PayDebt from './components/PayDebt.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/pay/:service',
    element: <FormQueryDebt/>
  },
  {
    path: '/pay/:service/:id',
    element: <PayDebt/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
