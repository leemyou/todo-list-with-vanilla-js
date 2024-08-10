const basicUrl = "https://koreanjson.com/todos";
const url = basicUrl + "?userId=1";

export const getFetchList = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP GET error! status: ${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const postFetchList = async (todoContents) => {
  console.log(todoContents);
  try {
    const res = await fetch(basicUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todoContents,
        completed: false,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP POST error! status: ${res.status}`);
    }

    const originData = console.log(await res.json());
    console.log(await getFetchList());
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
