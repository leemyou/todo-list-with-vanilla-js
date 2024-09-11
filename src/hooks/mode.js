import axios from "axios";

const basicUrl = "http://localhost:3000/currentMode";

/**
 * 최근 모드의 전체 정보 불러오는 함수
 * @returns currentMode
 */
const getCurrentMode = async () => {
  try {
    const { data } = await axios.get(basicUrl);
    return data;
  } catch (error) {
    console.log("GET CURRENTMODE ERROR! :", error);
  }
};

/**
 * 최근 모드의 데이터를 불러오는 함수
 * @returns modeInfo
 */
const getCurrentModeData = async () => {
  try {
    const currentMode = await getCurrentMode();

    return currentMode.modeInfo.find((obj) =>
      currentMode.isFetchMode ? obj.mode === "FETCH" : obj.mode === "AXIOS"
    );
  } catch (error) {
    console.log("GET getCurrentModeData ERROR! :", error);
  }
};

/**
 * 초기 모드를 불러오는 함수
 */
const getInitialMode = async (element) => {
  const modeText = document.getElementById("modeInfo");
  try {
    const { mode } = await getCurrentModeData();
    modeText.innerText = `${mode} MODE`;
    return;
  } catch (error) {
    console.log("GET INITIALMODE ERROR! :", error);
  }
};

/**
 * 모드 변경함수
 * @param {HTMLElement} element
 */
const changeCurrentMode = (element) => {
  const modeText = document.getElementById("modeInfo");

  element.addEventListener("click", async () => {
    try {
      const { isFetchMode, modeInfo } = await getCurrentMode();

      const putData = {
        modeInfo: modeInfo,
        isFetchMode: !isFetchMode,
      };

      const { data } = await axios.put(basicUrl, putData);

      console.log("currentMode: ", data);

      const { mode } = await getCurrentModeData();
      modeText.innerText = `${mode} MODE`;
      return;
    } catch (error) {
      console.error("CHANGE CURRENTMODE ERROR! :", error);
    }
  });
};

export { getCurrentModeData, getInitialMode, changeCurrentMode };
