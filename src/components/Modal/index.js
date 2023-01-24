import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link, preview } = currentPhoto;

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
        <a href={link} target="_blank">Link to Repository</a>
        <br></br>
        <br></br>
        <a type="button" style={{
          padding: "0.25rem 1rem",
          borderRadius: "0.5 rem",
          border: "none",
          outline: "none",
          cursor: "pointer",
          margin: "0 1px",
          backgroundColor: "green",
          color: "white"
        }} href={preview} target='_blank'>
          Preview Application
        </a>
      </div>
    </div >
  );
};

export default Modal;
