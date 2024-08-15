import { postFetchList } from "../hooks/fetch";
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
    } catch (error) {}
  });
};
