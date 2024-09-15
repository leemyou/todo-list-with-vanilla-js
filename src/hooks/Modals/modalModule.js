import { createModal } from "../../pages/Modal/modalUi";
import { modalClose, modalOpen } from "./modal";

// DOMContentLoaded 이벤트를 사용해 DOM 요소가 완전히 로드된 후 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", () => {
  const modeInfoElement = document.getElementById("modeInfo");

  // modeInfoElement가 존재할 경우에만 이벤트 리스너 등록
  if (modeInfoElement) {
    modeInfoElement.addEventListener("click", createModal);
  }
});
