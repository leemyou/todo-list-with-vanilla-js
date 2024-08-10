import "./mainStyle.css";
import checkIcon from "../assets/icons/check.png";

import { getList, postList } from "./list";
import { getFetchList, postFetchList } from "../hooks/fetch";

const onClickAdd = () => {
  console.log("run");
};

document.querySelector("#app").innerHTML = `
      <div class="mode-wrapper">

      <h1>FETCH MODE</h1>
      <button class="button-shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          width="24px"
        >
          <path
            d="M320 146s24.36-12-64-12a160 160 0 10160 160"
            fill="none"
            stroke="#83DBD6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="48"
          />
          <path
            fill="none"
            stroke="#83DBD6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M256 58l80 80-80 80"
          />
        </svg>
      </button>
    </div>

    <div class="todo-wrapper">
      <h1>Todo</h1>
      <ul class="todo-wrapper-ul" id="todoList">

      </ul>

      <div class="todo-wrapper-input button-shadow">
        <input type="text" class="inner-shadow" id="inputNewTodo"/>
        <button id="addList" type="button">
          <svg
            width="30"
            height="32"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 37L31 25L19 13"
              stroke="#83DBD6"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    `;

getList(await getFetchList());

postList(document.getElementById("addList"));

// <div>
//   <h1>Hello Vite!</h1>
//   <div class="card">
//     <button id="counter" type="button"></button>
//   </div>
//   <p class="read-the-docs">
//     Click on the Vite logo to learn more
//   </p>
// </div>

// setupCounter(document.querySelector("#counter"));
