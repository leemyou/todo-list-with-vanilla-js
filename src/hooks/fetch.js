const url = "https://koreanjson.com/todos?userId=1";

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
