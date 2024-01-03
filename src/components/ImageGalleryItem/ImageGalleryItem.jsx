import { Component } from "react";
import './ImageGalleryItem.css';

export class ImageGalleryItem extends Component {
    
    render() {
        const { src, alt, onClick } = this.props;
        return (
          <li className="ImageGalleryItem">
            <img
              src={src}
              alt={alt}
              className="ImageGalleryItemImage"
              onClick={onClick}
            />
          </li>
        );
    }
}