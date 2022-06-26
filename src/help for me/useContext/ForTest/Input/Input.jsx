import React from 'react';
// eslint-disable-next-line import/no-cycle,import/named
import { useAlert, useAlertToggle } from '../AlertContext';

function Input() {
  const alert = useAlert();
  const toggle = useAlertToggle();
  console.log(toggle);
  console.log(alert);
  return (
    <>
      <h1>Text привет в примере с useContext</h1>
      <button onClick={toggle}
              className="btn btn-success">
        {`${alert} Показать алерт`}
      </button>
    </>
  );
}
export default Input;
