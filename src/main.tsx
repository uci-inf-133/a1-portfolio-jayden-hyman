import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'

// HashRouter is just used for canvas submissions

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    {/* </BrowserRouter> */}
    </HashRouter>
  </StrictMode>
);
