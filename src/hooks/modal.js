import { createModal } from "../pages/Modal/modalUi";

const modalOpen = (element) => {
  element.addEventListener("click", () => {
    createModal();
  });
};

const modalClose = (element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.remove();
    return;
  });
};

export { modalOpen, modalClose };
