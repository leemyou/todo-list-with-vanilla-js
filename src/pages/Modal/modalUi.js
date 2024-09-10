import { getCurrentModeData, modalClose } from "../../hooks/modal";
import "./modalStyle.css";

export const createModal = async () => {
  console.log("run");

  const currentMode = await getCurrentModeData();

  const newModal = document.createElement("div");
  newModal.className = "modal-background";
  newModal.id = "modalBackground";

  newModal.innerHTML = `
    <div class="modal-wrapper">
      <h1>${currentMode.mode}</h1>
      <button type="button" class="btn-modal-close" id="btnModalClose" >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="#83DBD6" 
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="40"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
      </button>
      <div class="modal-info=box">
        <p>${currentMode.info}</p>
      </div>
      <div class="modal-code-box">
        <p>${currentMode.code}</p>
      </div>
    </div>
  `;

  document.getElementById("app").append(newModal);

  modalClose(document.getElementById("btnModalClose"));

  return;
};
