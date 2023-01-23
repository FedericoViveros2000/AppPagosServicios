import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormQueryDebt from './components/FormQueryDebt.jsx';
import PayDebt from './components/PayDebt.jsx';
import FinishPay from './components/FinishPay.jsx';
import FormRegister from './components/FormRegister.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/Register',
    element: <FormRegister/>
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
  }, 
  {
    path: 'pay/:id/finished',
    element: <FinishPay/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
