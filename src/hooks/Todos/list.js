import * as modeModule from "../Modes/index";
import { createListElement } from "../../pages/element";
import {
  deleteFetchList,
  getFetchList,
  postFetchList,
  putFetchList,
} from "./fetch";
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
    const newElement = createListElement(item);

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

const postList = async () => {
  const contents = document.getElementById("inputNewTodo");

  // element.addEventListener("click", async () => {
  try {
    if (contents.value.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const { isFetchMode } = await modeModule.getCurrentMode();
    console.log("isFetchMode: " + isFetchMode);
    const postFun = isFetchMode ? postFetchList : postAxiosList;

    const newData = await postFun(contents.value);
    const listWrapper = document.querySelector("#todoList");
    const textInputElement = document.querySelector("#inputNewTodo");

    const newElement = createListElement(newData);

    listWrapper.appendChild(newElement);
    textInputElement.value = ""; // 내용 초기화
    textInputElement.focus(); // 포커싱
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

const putList = async (id) => {
  // element.addEventListener("click", async (item) => {
  try {
    const { isFetchMode } = await modeModule.getCurrentMode();

    const putFun = isFetchMode ? putFetchList : putAxiosList;
    const updatedData = await putFun(id);
    const newElement = createListElement(updatedData);

    const orginItem = document.getElementById(`todo-${id}`).parentNode
      .parentNode;
    orginItem.replaceWith(newElement);
    return;
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

const deleteList = async (id) => {
  // element.addEventListener("click", async () => {
  try {
    // const elementId = element.id.split("-")[1];
    // const newData = await deleteFetchList(id);
    const { isFetchMode } = await modeModule.getCurrentMode();

    const deleteFun = isFetchMode ? deleteFetchList : deleteAxiosList;
    await deleteFun(id);

    // const listWrapper = document.querySelector("#todoList");

    // listWrapper.innerHTML = "";
    // return newData.map(async (item) => {
    //   const newElement = await createListElement(item);

    //   listWrapper.appendChild(newElement);
    // });
    await getList(isFetchMode);

    return;
  } catch (error) {
    console.error("Error:", error);
  }
  // });
};

// // TODO: 추후 다른 곳으로 빼야함.
// const postListEvent = (isModeFetch) => {
//   document.getElementById("addList").addEventListener("click", async () => {
//     await postList(isModeFetch);
//   });
// };

export { getList, postList, putList, deleteList };
