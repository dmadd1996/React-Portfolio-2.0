import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'frontend',
      description: 'A showcase of my front end development projects.',
    },
    { name: 'backend', description: 'A showcase of my back end development projects' },
    { name: 'resume', description: <iframe width='100%' height='1000' src="https://docs.google.com/document/d/e/2PACX-1vRU_lpBrGruHFakfXJf4pSyrHc9Tp-wQ89TZ0unSdxWBqfs1Dr_fcR6L-7Ta2GdLw/pub?embedded=true"></iframe>}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
