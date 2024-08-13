/* eslint-disable react/prop-types */

import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const {searchText, setSearchText} = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <input
        className="py-3 ps-2 outline-none bg-slate-300 rounded focus:rounded-none focus:border-b-2 border-black"
        type="text"
        placeholder="Enter your text"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
