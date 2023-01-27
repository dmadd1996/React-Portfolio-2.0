import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link, preview } = currentPhoto;

  //Function hides the preview image and replaces it with an iframe link to the sites
  var iframeView = function iframeView(){
    var inlineImg = document.getElementById('inlineImg')
    var inlineFrame = document.getElementById('inlineFrame')

    function imgHide(){
      inlineImg.setAttribute('hidden', true)
    }

    function iframeShow(){
      inlineFrame.classList.remove('hidden', true)
    }

    imgHide()
    iframeShow()
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div className='modalTopBar'>
          <h3 className="modalTitle">{name} </h3>
          <button type="button" style={{ background: "rgb(228, 46, 1)" }} onClick={onClose}>
            X
          </button>
        </div>
        <a href='#' onClick={iframeView}>
          <img
            id='inlineImg'
            src={require(`../../assets/large/${category}/${index}.jpg`).default}
            alt="current category"
          />
          <iframe id="inlineFrame"
            width="100%"
            height="500px"
            src={preview}
            className='hidden'
            >
          </iframe>
        </a>
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
