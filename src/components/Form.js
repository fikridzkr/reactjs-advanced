import React, { useState, useContext } from 'react';
import axios from 'axios';
import { URL } from '../api/config';
import { NabiContext } from '../NabiContext';
const Form = () => {
  const [inputNabi, setInputNabi] = useState('');
  const [dataNabi, setDataNabi] = useContext(NabiContext);
  const handlerInput = (e) => {
    setInputNabi(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(URL + inputNabi)
      .then((req) => {
        console.log(req.data.nabi);
        setDataNabi({
          nama: req.data.nabi.nama,
          image: req.data.nabi.image,
          tempat: req.data.nabi.tempat,
          lahir: req.data.nabi.lahir,
          umur: req.data.nabi.umur,
          kisah: req.data.nabi.kisah,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label for="nabi">Masukkan Nama Nabi</label>
          <input
            type="text"
            id="nabi"
            onChange={handlerInput}
            value={inputNabi}
          />
          <button type="submit">Cari Nabi</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
