import { React, useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Loader from "../../components/Loader/Loader";

const GIFS_LIMIT = 5;

function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs({ keyword: "Rick", GIFS_LIMIT });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    keyword !== "" && pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <h1 className="App-title">Giffy Store</h1>
      <form onSubmit={handleSubmit} className="App-form">
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search gifs"
          autoFocus={true}
        />
      </form>
      <h4>Examples</h4>
      {loading ? <Loader /> : <ListOfGifs gifs={gifs} />}
    </>
  );
}

export default Home;
