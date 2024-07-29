// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Admission from './Components/Admissions';
import Academics from './Components/Academics';
import Contact from './Components/Contact';
import Faculty from './Components/Faculty';
import Gallery from './Components/Gallery';
import Students from './Components/Students';
import Layout from './Components/Layout';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> {/* This renders Home at the root path */}
      <Route path='Home' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Academics' element={<Academics />} />
      <Route path='Admission' element={<Admission />} />
      <Route path='Faculty' element={<Faculty />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='Students' element={<Students />} />
      <Route path='Contact' element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
