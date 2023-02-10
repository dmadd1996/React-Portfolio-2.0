import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import '../../index.css';
import github from './github.png'
import linkedin from './linkedin.png'
function AboutForm() {
  return (
    <section className="my-5" >
      <div className='container'>
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2 aboutImage" alt="cover" />
        <div className="my-2 aboutDescription">
          <p>
            Hello, my name is Derek Madderom. As a lifelong learner, I am inspired to create computer systems that bring my background in psychology to the forefront of intuitive web design. My experiences include general IT, front and back-end web design, server development and maintenance. Being a team-player and a fair leader are the standards with which I measure my character. At the top of this page, you can navigate to previews of my projects, both front and backend, as well as view my resume, which has all of my contact info. Click on either of the icons below to check out my GitHub and LinkedIn pages
          </p>
        </div>
        <div className='container-2'>
          <div><a href="https://github.com/dmadd1996/" target="_blank">
            <img className='contactIcon' src={github}></img>
          </a></div>
          <div><a href="https://www.linkedin.com/in/derek-madderom-b22548220/" target="_blank">
            <div><img className='contactIcon' src={linkedin}></img></div>
          </a></div>
        </div>
      </div>

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

export default AboutForm;
