import React from 'react';
// eslint-disable-next-line import/no-cycle,import/named
import { useAlert, useAlertToggle } from '../AlertContext';

function Alert() {
  const alert = useAlert();
  const toggle = useAlertToggle();
  console.log(alert);

  if (!alert) return null;

  return (
    <div className={'alert'}>
      Это очень и очень важное сообщение
      <button onClick={toggle}>test</button>
    </div>
  );
}
export default Alert;
