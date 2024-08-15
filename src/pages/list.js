import "./mainStyle.css";
import checkIcon from "../assets/icons/check.png";
import { postFetchList } from "../hooks/fetch";

export const getList = (list) => {
  const listWrapper = document.querySelector("#todoList");

  return list.map((item) => {
    console.log(item);
    const newList = document.createElement("li");
    newList.innerHTML = `
          <label for="todo-${item.id}">
            <input type="checkbox" id="todo-${item.id}" />
            
            <div class="checkbox button-shadow ${
              item.completed ? "checkbox-checked" : "checkbox-non-checked"
            }">
              <div class="checked-wrapper inner-shadow">
                <img src=${checkIcon} />
              </div>
            </div>
            <p>${item.title}</p>
          </label>
          
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
      `;

    listWrapper.appendChild(newList);
  });
};

export const postList = (element) => {
  const contents = document.getElementById("inputNewTodo");

  element.addEventListener("click", async () => {
    try {
      const newData = await postFetchList(contents.value);
      const listWrapper = document.querySelector("#todoList");

      const newList = document.createElement("li");
      newList.innerHTML = `
          <label for="todo-${newData.id}">
            <input type="checkbox" id="todo-${newData.id}" />
            
            <div class="checkbox button-shadow ${
              newData.completed ? "checkbox-checked" : "checkbox-non-checked"
            }">
              <div class="checked-wrapper inner-shadow">
                <img src=${checkIcon} />
              </div>
            </div>
            <p>${newData.title}</p>
          </label>
          
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
      `;

      listWrapper.appendChild(newList);
    } catch (error) {}
  });
};
