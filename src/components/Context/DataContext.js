import React from 'react';
import PropTypes from 'prop-types';

export const GenresContext = React.createContext();

export const DataProvider = (props) => (
  <GenresContext.Provider value={props.genres}>
    {props.children}
  </GenresContext.Provider>
);

DataProvider.propTypes = {
  children: PropTypes.object,
  genres: PropTypes.array,
};
