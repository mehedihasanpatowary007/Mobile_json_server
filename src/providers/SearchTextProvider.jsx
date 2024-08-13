import { useState } from "react";
import { SearchContext } from "../context/SearchContext";

// eslint-disable-next-line react/prop-types
export default function SearchTextProvider({ children }) {
  const [searchText, setSearchText] = useState("");

  const value = { searchText, setSearchText };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
