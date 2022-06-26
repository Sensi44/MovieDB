import React from 'react';
import Input from './Input';
import Alert from './Alert';
import { AlertProvider, useAlertToggle } from './AlertContext';

function ForTest() {
  return (
    <AlertProvider>
      <div> a
        <Input/>
        <Alert/>
      </div>
      <button>toggle</button>
    </AlertProvider>
  );
}

export default ForTest;