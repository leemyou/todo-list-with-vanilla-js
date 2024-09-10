import "./mainStyle.css";

import { getList, postList } from "../hooks/list";
import { getFetchList } from "../hooks/fetch";
import { modalClose, modalOpen } from "../hooks/modal";

// 초기 리스트 불러오는 함수
getList(await getFetchList());

// 리스트 등록 함수
postList(document.getElementById("addList"));

modalOpen(document.getElementById("modeInfo"));
