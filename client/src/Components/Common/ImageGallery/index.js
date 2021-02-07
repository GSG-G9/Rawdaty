import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

const ImageGallery = ({ images }) => (
  <>
    {images.map((img) => (
      <Image key={img.id} src={img.src} width={100} />
    ))}
  </>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
