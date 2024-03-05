import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtistList } from './components/ArtistList/ArtistList.jsx';
import { ProjectList } from './components/ProjectsList/ProjectList.jsx';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails.jsx';
import { ArtistDetails } from './components/ArtistDetails/ArtistDetails.jsx';
import { Nav } from './components/NavBar/Nav.jsx';
import './index.css'
import App from './App.jsx'
import { ContextComponent } from './components/contextComponent.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>

    <Nav />
    <ContextComponent >
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/artistList" element={<ArtistList />} />
        <Route path="/projectList" element={<ProjectList />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        <Route path="/artistDetails/:id" element={<ArtistDetails />} />
    </Routes>
    </ContextComponent>
  </Router>
);
