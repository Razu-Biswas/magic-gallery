import React from "react";

const Header = ({ images, handleDelete }) => {
  const total = images.filter((image) => image.checked === true);

  return (
    <div className="  flex justify-between items-center py-4 px-6 border-0 border-b border-x  rounded-t">
      {total.length > 0 ? (
        <div>
          <input id="selected_files" type="checkbox" defaultChecked />
          <label className="font-semibold" htmlFor="selected_files">
            {" "}
            <span className="mr-1 font-semibold">{total.length}</span> File
            Selected
          </label>
        </div>
      ) : (
        <h1 className="font-bold">Magic Gallery</h1>
      )}

      {total.length > 0 && (
        <button
          className="text-red-500 font-semibold underline hover:underline-offset-4 hover:font-bold "
          onClick={handleDelete}
        >
          Delete Files{" "}
        </button>
      )}
    </div>
  );
};

export default Header;
