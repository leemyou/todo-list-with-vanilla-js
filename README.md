<a href="" target="_blank">
<img src="https://github.com/leemyou/todo-list-with-vanilla-js/blob/main/src/assets/images/banner.png" alt="배너" width="100%"/>
</a>

<br/>
<br/>

# 0. Getting Started

```bash
$ npm install
$ vite dev start
```

<br/>
<br/>

# 1. Project Overview

- 프로젝트 이름: TODO List With Vanilla Js(투두리스트입니다. 그런데 이제 fetch와 axios를 곁들인)
- 프로젝트 설명: 바닐라 JS를 사용하여 FETCH와 AXIOS의 차이 및 각 장단점에 대해서 알아보기 위해서 만든 프로젝트입니다.
- <a href='https://www.figma.com/design/mMU1Jth0Rxorvr643vOfwo/TODO?node-id=0-1&t=AcnOtn1sWZ3lsJae-1'>피그마 링크 보러가기</a>

<br/>
<br/>

# 2. Key Features

- **투두리스트**:

  - Json Server를 이용하여 투두리스트의 기능을 수행합니다.
  - fetch, axios 각 모드에 따른 방식으로 CRUD 기능을 수행합니다.

- **모드 변경**:

  - CRUD를 fetch로 할지 axios로 할 지 선택하고 테스트해볼 수 있습니다.

- **FETCH&AXIOS 모달**:
  - 화면 우측 상단에 FETCH MODE (또는 AXIOS MODE)를 클릭하면 각 함수에 대한 설명이 들어있는 모달이 나타납니다.

<br/>
<br/>

# 3. Technology Stack (기술 스택)

## 3.1 Language

- HTML5
- CSS3
- JavaScript
- NPM(10.8.3)
- VITE(5.3.5)

<br/>

## 3.2 Frotend

- AXIOS(1.7.7)
- JSON SERVER(1.0.0-beta.1)

<br/>

## 3.3 Design

- figma

<br/>

## 3.4 Cooperation

- Git

<br/>

# 4. Project Structure (프로젝트 구조)

```plaintext
project/
├── src/
│   ├── assets/              # 이미지, 아이콘 등의 정적 파일
│   ├── hooks/               # 커스텀 훅 모음
│   ├── pages/               # 각 페이지별 컴포넌트
│   ├── index.js             # 엔트리 포인트 파일
├── package-lock.json        # 정확한 종속성 버전이 기록된 파일로, 일관된 빌드를 보장
├── package.json             # 프로젝트 종속성 및 스크립트 정의
├── db.json                  # Json Server에서 사용하는 데이터 정의
├── index.html               # HTML 템플릿 파일
├── .gitignore               # Git 무시 파일 목록
└── README.md                # 프로젝트 개요 및 사용법
```

<br/>
<br/>

# 5. PreView

- 홈 화면
  <img src="https://github.com/leemyou/todo-list-with-vanilla-js/blob/main/src/assets/images/preview-1.png" alt="홈화면" width="100%"/>
- 체크화면
  <img src="https://github.com/leemyou/todo-list-with-vanilla-js/blob/main/src/assets/images/preview-2.png" alt="체크화면" width="100%"/>
- fetch 모달
  <img src="https://github.com/leemyou/todo-list-with-vanilla-js/blob/main/src/assets/images/preview-3.png" alt="fetch 모달" width="100%"/>
- axios 모달
  <img src="https://github.com/leemyou/todo-list-with-vanilla-js/blob/main/src/assets/images/preview-4.png" alt="axios 모달" width="100%"/>
