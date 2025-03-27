import { createContext, useState } from "react";

export const watchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState({});

  return (
    <watchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </watchListContext.Provider>
  );
};

export default WatchListProvider;
