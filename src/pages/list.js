import { postFetchList, putFetchList } from "../hooks/fetch";
import { createElement } from "../hooks/element";

export const getList = (list) => {
  const listWrapper = document.querySelector("#todoList");

  return list.map((item) => {
    console.log(item);
    const newElement = createElement(item);

    listWrapper.appendChild(newElement);
  });
};

export const postList = (element) => {
  const contents = document.getElementById("inputNewTodo");

  element.addEventListener("click", async () => {
    try {
      const newData = await postFetchList(contents.value);
      const listWrapper = document.querySelector("#todoList");

      const newElement = createElement(newData);

      listWrapper.appendChild(newElement);
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

export const putList = (element) => {
  element.addEventListener("click", async (item) => {
    const elementId = item.target?.id.split("-")[1];
    console.log("emyo.elementId :", elementId);
    const updatedData = await putFetchList(elementId);

    const orginItem = document.getElementById(`todo-${elementId}`);
    orginItem.innerHTML = createElement(updatedData);
    try {
    } catch (error) {
      console.error("Error:", error);
    }
  });
};
