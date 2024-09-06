import "../pages/Modal/modalStyle.css";

const createModal = () => {
  console.log("run");

  const newModal = document.createElement("div");
  newModal.className = "modal-wrapper";

  newModal.innerHTML = `
    <div class="modal-body">
      <h1>FETCH</h1>
      <p></p>
    </div>
  `;

  document.getElementById("app").append(newModal);
};

export const modalOpen = (element) => {
  element.addEventListener("click", () => {
    createModal();
  });
};
