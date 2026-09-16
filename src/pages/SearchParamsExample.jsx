import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchParamsExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  return (
    <div>
      <h1>Search Params Example</h1>

      <p>Category: {category}</p>

      <button onClick={() => setSearchParams({ category: "phone" })}>
        Show Phone
      </button>

      <button onClick={() => setSearchParams({ category: "laptop" })}>
        Show Laptop
      </button>
    </div>
  );
}

export default SearchParamsExample;