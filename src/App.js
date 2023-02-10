import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import AboutForm from './components/About';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    
    { name: 'backend', description: 'A showcase of my back end development projects'},
    {
      name: 'frontend',
      description: 'A showcase of my front end development projects.',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [aboutSelected, setAboutSelected] = useState(true);

  const [resumeSelected, setResumeSelected] = useState(false)

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
      {resumeSelected ? (
          <Resume></Resume>
        ) : aboutSelected ? (
          <AboutForm></AboutForm>
        ) : (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
