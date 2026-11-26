import React from 'react';
import { useState } from 'react';

import AddProject from './components/LandingPage/AddProject.jsx';


function App() {
  const projectData = [];
  const [projects, setProjects] = useState(projectData);
  
  return (
    <main>
      <AddProject projects={projects} setProjects={setProjects} />
    </main>
  );
}

export default App
