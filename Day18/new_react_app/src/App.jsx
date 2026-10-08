import { useState } from 'react'
import './App.css'
import About from './components/About/About';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import Restorants from './components/Restorants/Restorants';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Send from './components/Send/Send';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallary from './components/Gallary/Gallary';


function App() {
  const routes = createBrowserRouter([
    {path: `/`, element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: `/gallary`, element: <Gallary />, children: [
        {path: `rooms`, element: <Rooms />},
        {path: `restorants`, element: <Restorants />},
      ]},
      {path: `/about`, element: <About />},
      {path: `/send`, element: <Send />},
      {path: `*`, element: <NotFound />},
    ]}
  ]);
  return (
    <>

    <RouterProvider router={routes}/>

    </>
  )
}

export default App
