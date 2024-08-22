const basicUrl = "http://localhost:3000/todos";

export const getFetchList = async () => {
  try {
    const res = await fetch(basicUrl);
    if (!res.ok) {
      throw new Error(`HTTP GET error! status: ${res.status}`);
    }

    const data = await res.json();
    // sessionStorage.setItem("todos", JSON.stringify(data)); // JSON 문자열로 저장해야한다!!
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const serchFetchList = async (id) => {
  try {
    const res = await fetch(`${basicUrl}?id=${id}`);
    if (!res.ok) {
      throw new Error(`HTTP GET error! status: ${res.status}`);
    }

    const data = await res.json();
    // sessionStorage.setItem("todos", JSON.stringify(data)); // JSON 문자열로 저장해야한다!!
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
        title: todoContents,
        completed: false,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP POST error! status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const putFetchList = async (id) => {
  try {
    const originData = (await serchFetchList(id))[0] || {};

    const res = await fetch(basicUrl + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...originData,
        completed: !originData.completed,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP POST error! status: ${res.status}`);
    }

    const newData = await res.json();
    return newData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const deleteFetchList = async (id) => {
  try {
    const res = await fetch(basicUrl + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP POST error! status: ${res.status}`);
    }

    const newData = await getFetchList();
    return newData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
