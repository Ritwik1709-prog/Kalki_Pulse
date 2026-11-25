import React from 'react';import {createRoot} from 'react-dom/client';import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';import './index.css';
const Stub=({n}:{n:string})=><div className="p-20 num">{n} — coming next</div>;
createRoot(document.getElementById('root')!).render(<BrowserRouter><Routes>
<Route path="/" element={<LandingPage/>}/><Route path="/auth" element={<Stub n="/auth"/>}/><Route path="/dashboard" element={<Stub n="/dashboard"/>}/><Route path="/data-pipeline" element={<Stub n="/data-pipeline"/>}/></Routes></BrowserRouter>);
