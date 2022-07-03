import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

function Error(props) {
  const { img } = props;

  return (
    <Alert
      message={img}
      description='Ошибка получения данных с сервера'
      type='error'
      closable
    />
  );
}

Error.propTypes = {
  img: PropTypes.string,
};

export default Error;
