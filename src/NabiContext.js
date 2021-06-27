import React, { useState, createContext } from 'react';
export const NabiContext = createContext({
  nama: '',
  image: '',
  tempat: '',
  lahir: '',
  umur: 0,
  kisah: '',
});
export const NabiProvider = (props) => {
  const [dataNabi, setDataNabi] = useState({});

  return (
    <NabiContext.Provider value={[dataNabi, setDataNabi]}>
      {props.children}
    </NabiContext.Provider>
  );
};
