import axios from "axios";
// import { getList } from "../Todos";
import * as todoModules from "../Todos/list";

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
    console.error("GET CURRENTMODE ERROR! :", error);
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
    console.error("GET getCurrentModeData ERROR! :", error);
  }
};

/**
 * 초기 모드를 불러오는 함수
 */
const getInitialMode = async () => {
  const modeText = document.getElementById("modeInfo");
  try {
    const { mode } = await getCurrentModeData();
    modeText.innerText = `${mode} MODE`;

    const isFetch = mode === "FETCH";
    await todoModules.getList(isFetch);
    todoModules.postListEvent(isFetch);
    return;
  } catch (error) {
    console.error("GET INITIALMODE ERROR! :", error);
  }
};

/**
 * 모드 변경함수
 * @param {HTMLElement} element
 */
const changeCurrentMode = async () => {
  // const modeText = document.getElementById("modeInfo");

  try {
    const { isFetchMode, modeInfo } = await getCurrentMode();

    const putData = {
      modeInfo: modeInfo,
      isFetchMode: !isFetchMode,
    };

    // const { data } = await axios.put(basicUrl, putData);
    await axios.put(basicUrl, putData);

    // // 바뀐 모드로 리스트 재요청
    // await todoModules.getList(data.isFetchMode);

    // const { mode } = await getCurrentModeData();
    // modeText.innerText = `${mode} MODE`;
    await getInitialMode();

    return;
  } catch (error) {
    console.error("CHANGE CURRENTMODE ERROR! :", error);
  }
};

export {
  getCurrentMode,
  getCurrentModeData,
  getInitialMode,
  changeCurrentMode,
};
