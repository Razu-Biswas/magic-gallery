import React from "react";
import { BiImageAdd } from "react-icons/bi";

const Gallery = ({
  images,
  handleFunc,
  handleImageAdd,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
}) => {
  // md:grid-cols-4 lg:grid-cols-6
  return (
    <div className="py-4 px-6 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${
              index === 0 ? "col-span-2 row-span-2" : ""
            } border-2 rounded-lg group relative`}
            draggable
            onDragStart={() => handleDragStart(image)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div
              className={`absolute top-0 left-0 bg-gray-900/50 w-full h-full rounded-lg ${
                image.checked ? "visible" : "invisible"
              } group-hover:visible duration-300`}
            >
              <input
                onChange={(e) => handleFunc(e, image.id)}
                className="mt-3 ml-3 "
                type="checkbox"
              />
            </div>
            <img className="w-full h-full" src={image.image} alt="" />
          </div>
        ))}
        <label
          htmlFor="image-upload"
          className="border-2 font-semibold rounded-lg w-full h-full border-dashed flex  justify-center items-center min-h-[143.61px]"
        >
          <span>
            <span className="flex  justify-center items-center h-full w-full">
              <BiImageAdd />
            </span>
            Add Images
          </span>
        </label>
        <input
          id="image-upload"
          hidden
          type="file"
          accept="image/*"
          onChange={handleImageAdd}
        />
      </div>
    </div>
  );
};

export default Gallery;
