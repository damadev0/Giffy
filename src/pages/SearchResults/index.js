import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Loader from "../../components/Loader/Loader";
import { useGifs } from "../../hooks/useGifs";
import "./index.css";

const GIFS_LIMIT = 30;

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword, GIFS_LIMIT });

  return (
    <div className="Search">
      <h1>Results</h1>
      {loading ? (
        //<i>Loading...</i>
        <Loader />
      ) : gifs.length > 0 ? (
        <ListOfGifs gifs={gifs} />
      ) : (
        <p>There are no results for your search</p>
      )}
    </div>
  );
}

export default SearchResults;
