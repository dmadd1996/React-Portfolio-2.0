import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Note Taker',
      category: 'backend',
      description:
        'Using Express.js back end framework, I created a project that saved notes to an express server for later recall. With a snappy front end UI and a straightforward call to display note data, it showcases my initial foray into back end development. It was deployed to heroku.',
      link: "https://github.com/dmadd1996/Note-Taker",
      preview:  "https://note-taker-dmadd1996.herokuapp.com/"
    },
    {
      name: 'Social Network API',
      category: 'backend',
      description:
        'Using backend Javascript and insomnia for API calls, I set up the API framework for a user to pull, post, edit and delete entries to a social media platform. Link takes you to a youtube video outlining the function of the code. Git: https://github.com/dmadd1996/social-network-api',
      link:'https://www.youtube.com/watch?v=qTjoFmLylBIab_channel=DerekMadderom',
    },
    {
      name: 'Employee Tracker',
      category: 'backend',
      description:
        'Using a SQL database and inquirer.js, the user is able to build a team of employees, connected via foreign keys to their respective departments, job titles, salaries and managers. Translating from inquirer input to SQL syntax, the user is able to edit, add and delete fields from the command line. https://github.com/dmadd1996/Employee-Tracker'
    },
    {
      name: 'Regex Tutorial',
      category: 'backend',
      description:
        'As part of my coding boot camp, I was tasked with learning about regex and how to implement it in backend server development. Link goes to a readme outline of what I learned.',
      link: 'https://github.com/dmadd1996/Computer_Sci_Tutorial/blob/main/Email_Regex_Tutorial.md',
    },
    {
      name: 'Readme Generator',
      category: 'backend',
      description:
        'Using Node.js to run programs from the command line interface, I developed a program which captures user inputs and outputs Readme documents that adhere to industry standard formatting. All user input is taken from the CLI, with no browser necessary, making this my first backend development project.',
      link: 'https://github.com/dmadd1996/ReadME_Generator',   
     },
    
    {
      name: 'App-Showcase',
      category: 'frontend',
      description:
        `This is one of the first projects I ever worked on. It showcases my ability to make a straightforward website that acts as a hypothetical portfolio. This application serves to contrast this site, which is an actual portfolio of my projects and showcases how far I have come as a developer.`,
      link: 'https://github.com/dmadd1996/App_Showcase'
    },
    {
      name: 'Password Generator',
      category: 'frontend',
      description:
        'This project made use of javascript to allow users to select length, and use of case, numeric and special characters for a generated password. At the push of a button, the defined password is created for the user to copy and deploy. https://github.com/dmadd1996/Password_Generator'
    },
    {
      name: 'JavaScript Quiz',
      category: 'frontend',
      description:
        'This quiz utilized the basics of Javascript to provide a timed test. Each question is presented on a card that is pulled from an array. When the user inputs an incorrect answer, time is deducted from a timer. If the user answers correctly, the next question card is displayed. At the end of the quiz, the user is able to record their scores and save them to the local storage of their browser.',
      link: "https://github.com/dmadd1996/JS_Quiz",
      preview: "https://github.com/dmadd1996/JS_Quiz"
    },
    {
      name: 'Workday Scheduler',
      category: 'frontend',
      description:
        'In this project, I used a third-party api call to monitor the time and allow the user to click on a time slot, add a task (having it save to the local storage) and see the past time slots (gray), the current slot (green) and the future slots (red).'
    },
    {
      name: 'Weather Tracker',
      category: 'frontend',
      description:
        'This project, using server-side api calls, allows the user to get a breakdown of the weather in any city of their choosing. The city they type into the search bar is inserted into a fetch call and the data is translated onto the screen to provide a full breakdown of the weather in that location. Previous searches are saved in the local storage and displayed on the screen.'
    }
    
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
