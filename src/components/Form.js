import React from 'react';

const Form = (...props) => {
  return (
    <div>
      <form action="" onSubmit={props[0].submitHandler}>
        <div>
          <label for="nabi">Masukkan Nama Nabi</label>
          <input
            type="text"
            id="nabi"
            onChange={props[0].handlerInput}
            value={props[0].inputNabi}
          />
          <button type="submit">Cari Nabi</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
