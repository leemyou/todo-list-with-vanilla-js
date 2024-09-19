import axios from "axios";

const basicUrl = "http://localhost:3000/todos";

const getAxiosList = async () => {
  console.log("run axios Mode");
  try {
    const { data } = await axios.get(basicUrl);
    return data;
  } catch (error) {
    throw new Error(`HTTP GET error!: ${error}`);
  }
};

const serchAxiosListId = async (id) => {
  console.log("run axios Mode");
  try {
    const { data } = await axios.get(`${basicUrl}?id=${id}`);
    return data[0] || {};
  } catch (error) {
    throw new Error(`HTTP GET error!: ${error}`);
  }
};

const postAxiosList = async (todoContents) => {
  console.log("run axios Mode");
  try {
    const { data } = await axios.post(basicUrl, {
      title: todoContents,
      completed: false,
    });
    return data;
  } catch (error) {
    throw new Error(`HTTP POST error!: ${error}`);
  }
};

const putAxiosList = async (id) => {
  console.log("run axios Mode");
  try {
    const originData = await serchAxiosListId(id);

    const { data } = await axios.put(`${basicUrl}/${id}`, {
      ...originData,
      completed: !originData.completed,
    });

    return data;
  } catch (error) {
    throw new Error(`HTTP PUT error!: ${error}`);
  }
};

const deleteAxiosList = async (id) => {
  console.log("run axios Mode");
  try {
    await axios.delete(`${basicUrl}/${id}`);

    return;
  } catch (error) {
    throw new Error(`HTTP DELETE error!: ${error}`);
  }
};

export {
  getAxiosList,
  serchAxiosListId,
  postAxiosList,
  putAxiosList,
  deleteAxiosList,
};
