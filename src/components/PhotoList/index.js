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
        'Using Express.js back end framework, I built an app that uses CRUD API calls to keep user notes. It has a snappy front end UI and a straightforward, internal API call to parse new notes into JSON, array them in the database and re-stringify them onto the UI. This website showcases my initial foray into back end development. It is currently live as a public message board. Click on the image to leave a message.',
      link: "https://github.com/dmadd1996/Note-Taker",
      preview:  "https://note-taker-dmadd1996.herokuapp.com/"
    },
    {
      name: 'Social Network API',
      category: 'backend',
      description:
        "Knowledge of SQL is important, but in today's data-driven world, a developer needs newer, faster tools. NoSQL databases can process huge volumes of data in a fraction of the time, which is why it has become an industry standard. In this application, I used MongoDB as my NoSQL framework. Social networks are constantly being updated and added to, so agile development standards are a must to account for this unstructured data. Using the Insomnia API platform, the video preview exhibits how a front-end UI would make internal CRUD API calls to create, read, update and delete user posts. Click on the image to view the video.",
        link: 'https://github.com/dmadd1996/social-network-api',
        preview:'https://www.youtube.com/watch?v=qTjoFmLylBIab_channel=DerekMadderom',
    },
    {
      name: 'Employee Tracker',
      category: 'backend',
      description:
        "Sometimes old SQL just gets the job done. When a project calls for a system that can easily store textual data that must be easily accessible to non-developers, the stability and simplicity of SQL Content Management Systems is unmatched. For this back-end application, a company's departments, roles, employees and salaries are connected via foreign keys. Combine that with an Inquirer Node package as a command line interface, and it can be securely viewed, and edited, through easy to use text prompts. This system could easily be expanded to a full-stack application that makes onboarding and presenting employee data simple and intuitive. Click on the image to see how inquirer can make interfacing with SQL a breeze.",
        link: 'https://github.com/dmadd1996/Employee-Tracker',
        preview: 'https://youtu.be/hLGCesRoTNM'
    },
    {
      name: 'E-Commerce Server',
      category: 'backend',
      description:
        'Internet retail is the largest sector of the electronics industry, generating trillions of dollars every year in revenue. For any business, developers need a fundamental understanding of E-commerce architecture, due to its near universal prevalence. For this project, using an Express.js API and configuring it to use Sequelize, seeded commercial data (categories, products and tags) can be injected into a MySQL database. The Object-Relational Maps use API routes to perform RESTful CRUD operations, making huge volumes of data easily searched, narrowed and organized. This many-to-many relationship structure allows clients to find exactly what they are searching for without having to sift through mountains of data. Click on the image to watch how I use the Insomnia API platform to perform multiple variations of each CRUD operation and interact with the ORM.',
      link: 'https://github.com/dmadd1996/E-Commerce/tree/main/Develop',
      preview: "https://youtu.be/M2GKG4dpNLs"
    },
    {
      name: 'Readme Generator',
      category: 'backend',
      description:
        'Using Node.js to and Inquirer.js from the command line interface, I developed a program which captures user inputs and outputs Readme documents that adhere to industry standard formatting. All user input is taken from the CLI, with no browser necessary, making this my first backend development project.',
      link: 'https://github.com/dmadd1996/ReadME_Generator',
      preview: 'https://youtu.be/C4lib3Z4LHc'
     },
    
    {
      name: 'App-Showcase',
      category: 'frontend',
      description:
        `This is one of the first projects I ever worked on. It showcases my ability to make a straightforward website that acts as a hypothetical portfolio. This application serves to contrast my current portfolio, which showcases how far I have come as a developer. It was built with raw HTML and CSS.`,
      link: 'https://github.com/dmadd1996/App_Showcase',
      preview: "https://dmadd1996.github.io/App_Showcase/"
    },
    {
      name: 'Password Generator',
      category: 'frontend',
      description:
        'This project made use of JavaScript to allow users to select length, and use of case, numeric and special characters for a generated password. At the push of a button, the defined password is created for the user to copy and deploy. It was my first use of JavaScript to make dynamic front-end applications. While all of the JavaScript is original code, I made my own brute force regex to make sure that the generated password contained one of each defined character. It was not required for the project, but I enjoyed teaching myself something new through trial and error. Click on the image to generate a password for yourself.',
        link:"https://github.com/dmadd1996/Password_Generator",
        preview:"https://dmadd1996.github.io/Password_Generator/"
    },
    {
      name: 'JavaScript Quiz',
      category: 'frontend',
      description:
        'This quiz utilized the basics of Javascript to provide a timed test. Each question is presented on a card that is pulled from an array. When the user inputs an incorrect answer, time is deducted from a timer. If the user answers correctly, the next question card is displayed. At the end of the quiz, the user is able to record their scores and save them to the browser. The scores are JSON parsed/stringified to be displayed from the local storage and Bootstrap was used to streamline the styling. This application was a turning point for me in understanding Object-Based Programming, and though it uses basic web design principles, the final product is something for which I am very proud. Click the image to take the quiz.',
      link: "https://github.com/dmadd1996/JS_Quiz",
      preview: "https://dmadd1996.github.io/JS_Quiz/"
    },
    {
      name: 'Work Day Scheduler',
      category: 'frontend',
      description:
        'In this project, I used HTML and CSS (Bootstrap), powered by JQuery to create a workday scheduler app. The program calls to a Third-Party API, named Moment.js to track the local time. DOM traversals, handled by JQuery, allow the user to click on a time slot, turning it into a text entry field, add their task, and save it. The string is converted into JSON and arrayed in the local storage so the application can be closed and reopened without losing tasks. The page is updated dynamically to display the current time and change the color of each section to present past, present and future slots for a given day. This could be expanded to set email alerts, track time on task, or make day/night themes for an application. Click on the image to use the Scheduler.',
        link:"https://github.com/dmadd1996/Work_Calendar",
        preview:"https://dmadd1996.github.io/Work_Calendar/"
    },
    {
      name: 'Weather Tracker',
      category: 'frontend',
      description:
        'Using a Server-Side API, named OpenWeather, this application allows the user to get weather information in any city of their choosing. The city they type into the search bar is inserted into a Fetch  API call and the pulled data is translated onto the screen to provide a full breakdown of the weather in that location. Previous searches are saved in the local storage and displayed on the screen for ease of access. This could be used on any webpage to display useful weather information for the user. Click on the image to check the weather in your area.',
        link:"https://github.com/dmadd1996/weather_tracker",
        preview:"https://dmadd1996.github.io/weather_tracker/"
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
