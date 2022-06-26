import React from 'react';

export const GenresContext = React.createContext();

export const DataProvider = (props) => {
  console.log(props);
  return (
    // eslint-disable-next-line react/prop-types
    <GenresContext.Provider value={props.genres}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </GenresContext.Provider>
  );
};