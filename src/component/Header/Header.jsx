import React from "react";

const Header = ({ images, handleDelete }) => {
  const total = images.filter((image) => image.checked === true);

  return (
    <div className="  flex justify-between items-center py-4 px-6 border-0 border-b border-x  rounded-t">
      {total.length > 0 ? (
        <div>
          <input id="selected_files" type="checkbox" defaultChecked />
          <label htmlFor="selected_files">
            {" "}
            <span className="mr-1">{total.length}</span> File Selected
          </label>
        </div>
      ) : (
        <h1>Magic Gallery</h1>
      )}

      {total.length > 0 && (
        <button onClick={handleDelete}>Delete Files </button>
      )}
    </div>
  );
};

export default Header;
