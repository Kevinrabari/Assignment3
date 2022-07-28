import React, { useState } from "react";

function SearchForm() {
  const [text, settext] = useState("");

  return (
    <center>
      <div>
        <form>
          <input
            type="text"
            className="py-1 px-2 rounded-l-lg"
            placeholder="Seach any Newsfeeds"
          />
          <button
            style={{ background: "#ff4242", color: "#fcfafa" }}
            type="submit"
            className="bg-green-400 py-1 px-2 rounded-lg text-white"
          >
            Search
          </button>
        </form>
      </div>
    </center>
  );
}

export default SearchForm;
