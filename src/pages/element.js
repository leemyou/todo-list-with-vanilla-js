import checkIcon from "../assets/icons/check.png";
import { deleteList, putList } from "../hooks";
import "../pages/mainStyle.css";

export const createListElement = ({ elementData: item, isModeFetch: mode }) => {
  const newList = document.createElement("li");
  newList.className = item.completed
    ? "checkbox-checked"
    : "checkbox-non-checked";

  newList.innerHTML = `
        <label for="todo-${item.id}">
          <input type="checkbox" id="todo-${item.id}" />
          
          <div class="checkbox button-shadow">
            <div class="checked-wrapper inner-shadow">
              <img src=${checkIcon} />
            </div>
          </div>

          <p>${item.title}</p>
        </label>
        
        <button id="todo-${item.id}-delete">
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

  const eventData = { isFetchMode: mode, id: item.id };

  const checkboxElement = newList.querySelector(`#todo-${item.id}`);
  const deleteBtnElement = newList.querySelector(`#todo-${item.id}-delete`);

  checkboxElement.addEventListener("click", async () => {
    await putList(eventData);
  });

  deleteBtnElement.addEventListener("click", async () => {
    await deleteList(eventData);
  });

  // document.addEventListener("DOMContentLoaded", async () => {
  //   const checkboxElement = newList.querySelector(`#todo-${data.id}`);
  //   const deleteBtnElement = newList.querySelector(`#todo-${data.id}-delete`);

  //   if (checkboxElement) {
  //     checkboxElement.addEventListener("click", await putList(eventData));
  //   }
  //   if (deleteBtnElement) {
  //     deleteBtnElement.addEventListener("click", await deleteList(eventData));
  //   }
  // });

  return newList;
};
