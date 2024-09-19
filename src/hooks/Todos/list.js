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

const getList = async (mode) => {
  const getFun = mode ? getFetchList : getAxiosList;
  const list = await getFun();

  const listWrapper = document.querySelector("#todoList");
  listWrapper.innerHTML = "";

  return list.map(async (item) => {
    const newElement = createListElement(item);

    listWrapper.appendChild(newElement);
  });
};

const postList = async () => {
  const contents = document.getElementById("inputNewTodo");

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
};

const putList = async (id) => {
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
};

const deleteList = async (id) => {
  try {
    const { isFetchMode } = await modeModule.getCurrentMode();

    const deleteFun = isFetchMode ? deleteFetchList : deleteAxiosList;
    await deleteFun(id);

    await getList(isFetchMode);

    return;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { getList, postList, putList, deleteList };
