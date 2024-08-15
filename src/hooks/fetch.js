const basicUrl = "https://koreanjson.com/todos";
const url = basicUrl + "?userId=1";

export const getFetchList = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP GET error! status: ${res.status}`);
    }

    const data = await res.json();
    sessionStorage.setItem("todos", JSON.stringify(data)); // JSON 문자열로 저장해야한다!!
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const postFetchList = async (todoContents) => {
  console.log(todoContents);
  try {
    const now = new Date();
    const res = await fetch(basicUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        title: todoContents,
        completed: false,
        createdAt: now,
        updatedAt: now,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP POST error! status: ${res.status}`);
    }

    const originData = JSON.parse(sessionStorage.getItem("todos")) || []; // 문자열로 저장된 데이터를 다시 JSON으로 파싱
    const newData = {
      ...(await res.json()),
      id: originData[originData.length - 1].id + 1,
    };
    const updatedData = [...originData, newData];
    sessionStorage.setItem("todos", JSON.stringify(updatedData)); // 업데이트된 데이터를 세션에 저장
    console.log(updatedData);
    // return updatedData;
    return newData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
