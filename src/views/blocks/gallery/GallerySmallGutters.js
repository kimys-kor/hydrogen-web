import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GallerySmallGutters = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-1.jpg',
    '/img/product/large/product-1.jpg',
    '/img/product/large/product-1.jpg',
    '/img/product/large/product-1.jpg',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-4 g-2">
        <Col>
          <div className="card hover-img-scale-up">
            <img className="card-img sh-25 scale cursor-pointer" src="/img/product/small/product-1.jpg" alt="card image" onClick={() => openLightbox(0)} />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img className="card-img sh-25 scale cursor-pointer" src="/img/product/small/product-1.jpg" alt="card image" onClick={() => openLightbox(1)} />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img className="card-img sh-25 scale cursor-pointer" src="/img/product/small/product-1.jpg" alt="card image" onClick={() => openLightbox(2)} />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img className="card-img sh-25 scale cursor-pointer" src="/img/product/small/product-1.jpg" alt="card image" onClick={() => openLightbox(3)} />
          </div>
        </Col>
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
    </>
  );
};

export default GallerySmallGutters;
