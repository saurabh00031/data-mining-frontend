import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import Dropzone from 'react-dropzone';
import './ImageCropper.css';

const Ast1 = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // You can do something with the cropped area and its pixel values, if needed.
  };

  const onSelectFile = (files) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleCrop = () => {
    // You can perform any action when the user clicks a "Crop" button.
    // Here, we'll display the cropped image as an example.
    setCroppedImage(croppedImage);
  };

  return (
    <div className="image-cropper">
      <Dropzone onDrop={onSelectFile}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop an image here or click to select an image.</p>
          </div>
        )}
      </Dropzone>
      {image && (
        <div className="cropper-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
      )}
      {image && (
        <button onClick={handleCrop} className="crop-button">
          Crop
        </button>
      )}
      {croppedImage && (
        <div className="cropped-image">
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default Ast1
