import React, { useState } from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import { validateEmail } from '../../utils/helpers';
import '../../index.css';

var contactIcon = document.getElementsByClassName('contactIcon')

anime({
  targets: {contactIcon},
  translateY: -40,
  duration: 5000,
  direction: 'alternate',
  loop: true,
  delay: anime.stagger(1000)
})

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    // <section className="my-5" >
    //   <div className='container'>
    //     <h1 id="about">Who am I?</h1>
    //     <img src={coverImage} className="my-2 aboutImage" alt="cover" />
    //     <div className="my-2 aboutDescription">
    //       <p>
    //         Deep love of complex problems and elegant solutions. A lifelong learner, I am inspired to create computer systems that bring my background in psychology to the forefront of intuitive web design. My experiences include general IT, front and back-end web design, server development and maintenance. Being a team-player and a fair leader are the standards with which I measure my character.
    //       </p>
    //     </div>
    //     <div className='container-2'>
    //       <div><img className='contactIcon' src='https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png'></img></div>
    //       <div><img className='contactIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968866.png'></img></div>
    //     </div>
    //   </div>

      {/* <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form> */}
    </section>
  );
}

export default ContactForm;
