import {
  deleteFetchList,
  getFetchList,
  postFetchList,
  putFetchList,
} from "./fetch";
import { createListElement } from "../../pages/element";
import {
  deleteAxiosList,
  getAxiosList,
  postAxiosList,
  putAxiosList,
} from "./axios";

// test code
const getList = async (mode) => {
  const getFun = mode ? getFetchList : getAxiosList;
  const list = await getFun();

  // if (list.length > 0) {
  const listWrapper = document.querySelector("#todoList");
  listWrapper.innerHTML = "";

  return list.map(async (item) => {
    const newElement = createListElement({
      elementData: item,
      isModeFetch: mode,
    });

    listWrapper.appendChild(newElement);
  });
  // } else {
  //   return;
  // }
};

// const getList = (list) => {
//   const listWrapper = document.querySelector("#todoList");

//   return list.map((item) => {
//     const newElement = createListElement(item);

//     listWrapper.appendChild(newElement);
//   });
// };

const postList = async (isModeFetch) => {
  const contents = document.getElementById("inputNewTodo");

  // element.addEventListener("click", async () => {
  try {
    const postFun = isModeFetch ? postFetchList : postAxiosList;

    const newData = await postFun(contents.value);
    const listWrapper = document.querySelector("#todoList");
    const textInputElement = document.querySelector("#inputNewTodo");

    const newElement = createListElement({
      elementData: newData,
      isModeFetch: isModeFetch,
    });

    listWrapper.appendChild(newElement);
    textInputElement.value = ""; // 내용 초기화
    textInputElement.focus(); // 포커싱
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

const putList = async ({ isFetchMode: mode, id: id }) => {
  // element.addEventListener("click", async (item) => {
  try {
    const putFun = mode ? putFetchList : putAxiosList;
    const updatedData = await putFun(id);
    const newElement = createListElement({
      elementData: updatedData,
      isFetchMode: mode,
    });

    const orginItem = document.getElementById(`todo-${id}`).parentNode
      .parentNode;
    orginItem.replaceWith(newElement);
    return;
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

const deleteList = async ({ isFetchMode: mode, id: id }) => {
  // element.addEventListener("click", async () => {
  try {
    // const elementId = element.id.split("-")[1];
    // const newData = await deleteFetchList(id);
    const deleteFun = mode ? deleteFetchList : deleteAxiosList;
    await deleteFun(id);

    // const listWrapper = document.querySelector("#todoList");

    // listWrapper.innerHTML = "";
    // return newData.map(async (item) => {
    //   const newElement = await createListElement(item);

    //   listWrapper.appendChild(newElement);
    // });
    await getList(mode);

    return;
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

// TODO: 추후 다른 곳으로 빼야함.
const postListEvent = (isModeFetch) => {
  document.getElementById("addList").addEventListener("click", async () => {
    await postList(isModeFetch);
  });
};

export { getList, postList, putList, deleteList, postListEvent };
