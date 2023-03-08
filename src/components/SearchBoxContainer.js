import React from "react";

export const SearchBoxContainer = ({ value, setValue, getImages }) => {
  return (
    <>
      <section className="imageContainer">
        <div className="searchBoxText">
          <h1>Unsplash</h1>
          <p>The internet’s source for visuals.</p>
          <p>Powered by creators everywhere.</p>
        </div>
        <div className="search">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search high-resolution images"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <i className="fa-sharp fa-solid fa-camera"></i>
        </div>
        <button onClick={getImages}>search</button>
      </section>
    </>
  );
};
