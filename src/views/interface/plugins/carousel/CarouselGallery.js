import React from 'react';
import GlideGallery from 'components/carousel/GlideGallery';

const CarouselGallery = () => {
  const galleyItems = [
    {
      large: '/img/product/large/product-1.jpg',
      thumb: '/img/product/small/product-1.jpg',
    },
    {
      large: '/img/product/large/product-2.jpg',
      thumb: '/img/product/small/product-2.jpg',
    },
    {
      large: '/img/product/large/product-3.jpg',
      thumb: '/img/product/small/product-3.jpg',
    },
    {
      large: '/img/product/large/product-4.jpg',
      thumb: '/img/product/small/product-4.jpg',
    },
    {
      large: '/img/product/large/product-5.jpg',
      thumb: '/img/product/small/product-5.jpg',
    },
  ];

  return (
    <GlideGallery>
      <GlideGallery.LargeItems className="shadow rounded mb-4">
        {galleyItems.map((item, index) => (
          <GlideGallery.Item key={`gallery.large.${index}`}>
            <img alt="detail" src={item.large} className="responsive border-0 rounded img-fluid w-100" />
          </GlideGallery.Item>
        ))}
      </GlideGallery.LargeItems>
      <GlideGallery.ThumbItems className="mb-3" arrowClassName="shadow" arrowVariant="foreground-alternate">
        {galleyItems.map((item, index) => (
          <GlideGallery.Item key={`gallery.thumb.${index}`}>
            <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid shadow" />
          </GlideGallery.Item>
        ))}
      </GlideGallery.ThumbItems>
    </GlideGallery>
  );
};

export default CarouselGallery;
