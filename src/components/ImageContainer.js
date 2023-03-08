import React from "react";
import "../App.css";

export const ImageContainer = ({ imageData, requestSearch, searchData }) => {
  return (
    <div className="imageGallery">
      {requestSearch
        ? searchData.map((data, id) => {
            return <img src={data.urls.regular} key={id} />;
          })
        : imageData.map((data, id) => {
            return <img src={data.urls.regular} key={id} />;
          })}
    </div>
  );
};
