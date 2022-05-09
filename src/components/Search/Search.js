import React, { useState } from "react";

const Search = ({ history }) => {
  const { keyword, setKeyword } = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search A Product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value={Search} />
      </form>
    </div>
  );
};

export default Search;
