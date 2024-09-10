import { deleteFetchList, postFetchList, putFetchList } from "../hooks/fetch";
import { createElement } from "../hooks/element";

const getList = (list) => {
  const listWrapper = document.querySelector("#todoList");

  return list.map((item) => {
    console.log(item);
    const newElement = createElement(item);

    listWrapper.appendChild(newElement);
  });
};

const postList = (element) => {
  const contents = document.getElementById("inputNewTodo");

  element.addEventListener("click", async () => {
    try {
      const newData = await postFetchList(contents.value);
      const listWrapper = document.querySelector("#todoList");
      const textInputElement = document.querySelector("#inputNewTodo");

      const newElement = createElement(newData);

      listWrapper.appendChild(newElement);
      textInputElement.value = ""; // 내용 초기화
      textInputElement.focus(); // 포커싱
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

const putList = (element) => {
  element.addEventListener("click", async (item) => {
    try {
      const elementId = item.target?.id.split("-")[1];
      const updatedData = await putFetchList(elementId);

      const orginItem = document.getElementById(`todo-${elementId}`).parentNode
        .parentNode;
      const newElement = createElement(updatedData);
      orginItem.replaceWith(newElement);
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

const deleteList = (element) => {
  element.addEventListener("click", async () => {
    try {
      const elementId = element.id.split("-")[1];
      console.log("emyo.delete.element", elementId);

      const newData = await deleteFetchList(elementId);
      console.log("newDagta :", newData);

      const listWrapper = document.querySelector("#todoList");

      listWrapper.innerHTML = "";
      return newData.map((item) => {
        const newElement = createElement(item);

        listWrapper.appendChild(newElement);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

export { getList, postList, putList, deleteList };
