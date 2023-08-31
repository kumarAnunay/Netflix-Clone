import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searching, setSearching] = useState(true);

  return (
    <SearchContext.Provider value={{ searching, setSearching }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
