import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

function Error(props) {
  const { img } = props;

  const onClose = (e) => {
    console.log('Error notification was closed.', e);
  };

  return (
    <Alert
      message={img}
      description="Ошибка получения данных с сервера"
      type="error"
      closable
      onClose={onClose}
    />
  );
}

Error.propTypes = {
  img: PropTypes.string,
};

export default Error;
