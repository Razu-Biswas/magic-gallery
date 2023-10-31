import Header from "./component/Header/Header";
import Gallery from "./component/Gallery/Gallery";
import { useState, useEffect } from "react";
import data from "./database/data";

const App = () => {
  const [images, setImages] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    if (images.length > 0) return;
    setImages(data);
  }, []);

  const handleSelect = (e, id) => {
    const updated = images.map((image) => {
      if (image.id === id) {
        return { ...image, checked: e.target.checked };
      }

      return image;
    });

    setImages(updated);
  };

  const handleDelete = () => {
    const filtered = images.filter((image) => image.checked !== true);
    setImages(filtered);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            image: e.target.result,
            order: prev.length + 1,
            checked: false,
          },
        ]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();

    // Swap the dragged item with the current item being hovered over
    const updatedOrder = [...images];
    updatedOrder.splice(
      index,
      0,
      updatedOrder.splice(images.indexOf(draggedItem), 1)[0]
    );
    setImages(updatedOrder);
  };

  return (
    <main className=" min-h-screen h-full  w-full overflow-y-auto bg-slate-200 flex justify-center items-center">
      <div className="max-w-[1000px] mx-auto bg-white w-full">
        <Header handleDelete={handleDelete} images={images} />
        <Gallery
          handleDragOver={handleDragOver}
          handleDragEnd={handleDragEnd}
          handleDragStart={handleDragStart}
          handleImageChange={handleImageChange}
          handleFunc={handleSelect}
          images={images}
        />
      </div>
    </main>
  );
};

export default App;
