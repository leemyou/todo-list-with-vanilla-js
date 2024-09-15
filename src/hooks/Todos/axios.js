import axios from "axios";

const basicUrl = "http://localhost:3000/todos";

const getAxiosList = async () => {
  console.log("run axios Mode");
  const { data } = await axios.get(basicUrl);

  return data;
};

const serchAxiosList = async () => {
  console.log("run axios Mode");
};

const postAxiosList = async () => {
  console.log("run axios Mode");
};

const putAxiosList = async () => {
  console.log("run axios Mode");
};

const deleteAxiosList = async () => {
  console.log("run axios Mode");
};

export {
  getAxiosList,
  serchAxiosList,
  postAxiosList,
  putAxiosList,
  deleteAxiosList,
};
