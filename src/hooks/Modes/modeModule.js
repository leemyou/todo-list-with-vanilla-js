import { changeCurrentMode, getCurrentMode, getInitialMode } from "./mode";

// 페이지 로드 시 초기 모드 불러오는 함수 실행
document.addEventListener("DOMContentLoaded", getInitialMode);

// 모드 변경 버튼 클릭 시 모드 변경 함수 실행
document
  .getElementById("btnModeChange")
  .addEventListener("click", changeCurrentMode);
