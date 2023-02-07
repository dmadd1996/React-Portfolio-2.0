import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import '../../index.css';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p className='mx-2'>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
