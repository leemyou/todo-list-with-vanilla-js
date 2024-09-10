import "./mainStyle.css";

import { getList, postList } from "../hooks/list";
import { getFetchList } from "../hooks/fetch";
import { modalClose, modalOpen } from "../hooks/modal";

// 초기 리스트 불러오는 함수
getList(await getFetchList());

// 리스트 등록 함수
postList(document.getElementById("addList"));

const pressEnter = () => {
  // 엔터키의 코드는 13입니다.
  if (event.keyCode == 13) {
    // 실행할 함수();
    console.log("run");
    return;
  }
};

modalOpen(document.getElementById("modeInfo"));

export { pressEnter };
