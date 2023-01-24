import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
        Deep love of complex problems and elegant solutions. A lifelong learner, I am inspired to create computer systems that bring my background in psychology to the forefront of intuitive web design. My experiences include general IT, front and back-end web design, server development and maintenance. Being a team-player and a fair leader are the standards with which I measure my character.
        </p>
      </div>
    </section>
  );
}

export default About;
