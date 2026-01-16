import { useState } from "react";

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const currentIndex = images.indexOf(selectedImage) + 1;
  const totalImages = images.length;

  return (
    <div className="h-screen w-screen flex flex-col bg-black overflow-hidden">

      
      <div className="flex-[8] relative flex items-center justify-center overflow-hidden">

       
        <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-md">
          Image {currentIndex} / {totalImages}
        </div>

        <img
          src={selectedImage}
          alt="Selected"
          className="max-h-full max-w-full object-contain"
        />
      </div>

   
      <div className="flex-[2] bg-gray-900 flex items-center px-4">
        <div className="flex gap-4 overflow-x-auto w-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              onClick={() => setSelectedImage(img)}
              className={`h-20 min-w-[120px] object-cover cursor-pointer rounded-md border-2 transition-all
                ${
                  selectedImage === img
                    ? "border-white scale-105"
                    : "border-transparent hover:border-gray-400"
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ImageViewer;
