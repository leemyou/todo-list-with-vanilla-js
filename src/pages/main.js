import "./mainStyle.css";

import { getList, postList } from "../hooks/list";
import { getFetchList } from "../hooks/fetch";
import { modalOpen } from "../hooks/modal";
import { changeCurrentMode, getInitialMode } from "../hooks/mode";

// 초기 리스트 불러오는 함수
getList(await getFetchList());

// 리스트 등록 함수
postList(document.getElementById("addList"));

// 초기 모드 불러오는 함수
getInitialMode();

// 모드 변경 함수
changeCurrentMode(document.getElementById("btnModeChange"));

modalOpen(document.getElementById("modeInfo"));
