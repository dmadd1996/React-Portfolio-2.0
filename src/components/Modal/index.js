import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div className='modalTopBar'>
          <h3 className="modalTitle">{name} </h3>
          <button type="button" style={{ background: "rgb(228, 46, 1)" }} onClick={onClose}>
            X
          </button>
        </div>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <a href={link}>Link to Repository</a>
        <br></br>
        <br></br>
        <button type="button" style={{  display: "block", margin: "auto" }}>
          {/* <a href={preview}> */}
            Preview Application
          {/* </a> */}
        </button>
      </div>
    </div>
  );
};

export default Modal;
