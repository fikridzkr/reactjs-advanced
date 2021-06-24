import React, { useState } from 'react';
import { dataNabi, getApi } from '../api/config';
import Form from './Form';
import View from './View';

const Index = () => {
  const [inputNabi, setInputNabi] = useState('');
  const handlerInput = (e) => {
    setInputNabi(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputNabi('');
    getApi(inputNabi);
  };
  return (
    <div>
      <Form
        handlerInput={handlerInput}
        submitHandler={submitHandler}
        inputNabi={inputNabi}
      />
      <View />
    </div>
  );
};

export default Index;
