import axios from "axios";


const getApi = async () => {

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=6fa5d1bf&s=titanic&page=1`
    );

    // const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey={import.meta.env.VITE_API_KEY}&s=titanic&page=1');

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }

};

export default getApi;
