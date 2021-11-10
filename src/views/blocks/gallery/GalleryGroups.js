import React, { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const GalleryGroupsFirst = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-1.jpg', '/img/product/large/product-1.jpg', '/img/product/large/product-1.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-2 h-100">
            <Col className="h-100">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex mb-2 flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(2)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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

export const GalleryGroupsSecond = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-2.jpg', '/img/product/large/product-2.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-2 h-100">
            <Col className="h-100">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-2.jpg)' }}
              />
            </Col>
            <Col className="h-100">
              <div
                onClick={() => openLightbox(1)}
                className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-2.jpg)' }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

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

export const GalleryGroupsThird = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-2 h-100">
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex flex-grow-1 mb-2">
                <div
                  onClick={() => openLightbox(0)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex flex-grow-1 mb-2">
                <div
                  onClick={() => openLightbox(0)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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

export const GalleryGroupsFourth = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-3.jpg', '/img/product/large/product-3.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-2 h-100">
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex flex-grow-1 mb-2">
                <div
                  onClick={() => openLightbox(0)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-3.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-3.jpg)' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

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

export const GalleryGroupsFifth = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-1.jpg', '/img/product/large/product-1.jpg', '/img/product/large/product-1.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-1 h-100 gallery">
            <Col className="h-100">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md-start bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
              />
            </Col>

            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex mb-1 flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md-top-end bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(2)}
                  className="w-100 h-100 rounded-md-bottom-end bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-1.jpg)' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

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

export const GalleryGroupsSixth = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-2.jpg', '/img/product/large/product-2.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className=" sh-35">
          <Row className="g-1 h-100">
            <Col className="h-100">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md-start bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-2.jpg)' }}
              />
            </Col>
            <Col className="h-100">
              <div
                onClick={() => openLightbox(1)}
                className="w-100 h-100 rounded-md-end bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-2.jpg)' }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
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

export const GalleryGroupsSeventh = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
    '/img/product/large/product-4.jpg',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <Row className="g-1 h-100">
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex mb-1 flex-grow-1">
                <div
                  onClick={() => openLightbox(0)}
                  className="w-100 h-100 rounded-md-top-start bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(1)}
                  className="w-100 h-100 rounded-md-bottom-start bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-stretch h-100">
              <div className="d-flex mb-1 flex-grow-1">
                <div
                  onClick={() => openLightbox(2)}
                  className="w-100 h-100 rounded-md-top-end bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div
                  onClick={() => openLightbox(3)}
                  className="w-100 h-100 rounded-md-bottom-end bg-cover-center cursor-pointer"
                  style={{ backgroundImage: 'url(/img/product/small/product-4.jpg)' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

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

export const GalleryGroupsEighth = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-3.jpg', '/img/product/large/product-3.jpg'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="sh-35">
          <div className="d-flex flex-column justify-content-stretch h-100">
            <div className="d-flex mb-1 flex-grow-1">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md-top bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-3.jpg)' }}
              />
            </div>
            <div className="d-flex flex-grow-1">
              <div
                onClick={() => openLightbox(0)}
                className="w-100 h-100 rounded-md-bottom bg-cover-center cursor-pointer"
                style={{ backgroundImage: 'url(/img/product/small/product-3.jpg)' }}
              />
            </div>
          </div>
        </Card.Body>
      </Card>

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
