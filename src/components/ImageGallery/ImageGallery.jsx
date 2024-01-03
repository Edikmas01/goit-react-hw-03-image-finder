import React, { Component } from "react";
import"./ImageGallery.css"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            image={image}
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => onClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}