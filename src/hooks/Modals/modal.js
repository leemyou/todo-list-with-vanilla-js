import { createModal } from "../../pages/Modal/modalUi";

const modalOpen = () => {
  createModal();
};

const modalClose = (element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.remove();
    return;
  });
};

export { modalOpen, modalClose };
