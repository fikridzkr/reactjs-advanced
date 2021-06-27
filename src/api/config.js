import axios from 'axios';

export const URL = 'https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=';
// menggunakan thencatch
export const GetApi = (nama) => {
  axios
    .get(URL + nama)
    .then((req) => {
      console.log(req.data.nabi);
    })
    .catch((err) => console.log(err));
};

// menggunakan asyncwait
export const getApiAsync = async (nama) => {
  try {
    const dataNabi = await axios.get(`${URL}${nama}`);
    console.log(dataNabi);
  } catch (error) {
    console.log(error);
  }
};
