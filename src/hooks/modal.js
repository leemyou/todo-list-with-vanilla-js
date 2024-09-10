import axios from "axios";
import { createModal } from "../pages/Modal/modalUi";

const basicUrl = "http://localhost:3000";

const getCurrentMode = async () => {
  try {
    const { data } = await axios.get(basicUrl + "/currentMode");
    return data;
  } catch (error) {
    console.log("GET CURRENTMODE ERROR! :", error);
  }
};

const getCurrentModeData = async () => {
  try {
    const currentMode = await getCurrentMode();
    const { data } = await axios.get(basicUrl + "/modeInfo");
    return data.find((obj) => obj.mode === currentMode);
  } catch (error) {
    console.log("GET getCurrentModeData ERROR! :", error);
  }
};

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

export { getCurrentModeData, modalOpen, modalClose };
