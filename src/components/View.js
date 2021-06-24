import React, { useEffect } from 'react';
import { dataNabi, getApi } from '../api/config';

const View = () => {
  useEffect(() => {
    function refresh() {
      return dataNabi;
    }
  }, []);
  return (
    <div>
      {dataNabi && (
        <div>
          <img src={dataNabi.image} alt="foto" />
          <h1>{dataNabi.nama}</h1>
          <h3>Tempat: {dataNabi.tempat}</h3>
          <h3>Lahir : {dataNabi.lahir}</h3>
          <h3>Umur : {dataNabi.umur}</h3>

          <p>{dataNabi.kisah}</p>
        </div>
      )}
    </div>
  );
};

export default View;
