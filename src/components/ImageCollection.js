import React, { useState, useEffect } from "react";
import { ImageContainer } from "./ImageContainer";
import { SearchBoxContainer } from "./SearchBoxContainer";

const ImageCollection = () => {
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [requestSearch, setRequestSearch] = useState(false);

  const getSearchImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=4rnbni2j1YKcdAImrnNjOVaI7MVyXwq_0yItdg8-8-M&query=${value}`
    );
    const dataRecieved = await response.json();
    const dataResponse = dataRecieved.results;
    // console.log(dataRecieved);
    setSearchData(dataResponse);
    setRequestSearch("true");
    setValue("");
    console.log(requestSearch);
  };

  const getImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=4rnbni2j1YKcdAImrnNjOVaI7MVyXwq_0yItdg8-8-M&page=${page}`
    );
    const data = await response.json();
    setImageData((prev) => [...prev, ...data]);
    // console.log(imageData);
  };

  const handleScrolling = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
  }, [requestSearch]);

  return (
    <>
      <SearchBoxContainer
        value={value}
        setValue={setValue}
        getImages={getSearchImages}
      />

      <ImageContainer
        imageData={imageData}
        requestSearch={requestSearch}
        searchData={searchData}
      />
    </>
  );
};

export default ImageCollection;
