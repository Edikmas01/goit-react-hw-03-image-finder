import React, { Component } from 'react';
import './Modal.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageURL, onClose } = this.props;

    return (
      isOpen && (
        <div className="Overlay" onClick={this.handleOverlayClick}>
          <div className="Modal">
            <img src={imageURL} alt="Large" />
            <button type="button" className="close-button" onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )
    );
  }
}
