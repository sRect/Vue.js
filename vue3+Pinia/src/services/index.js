// 查询列表
export const getTodolist = (filterType = "2") =>
  fetch("/api/todoList/list?filterType=" + filterType);

// 添加数据
export const addTodolist = (msg, timeStamp) =>
  fetch("/api/todoList/addOne", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      msg,
      timeStamp,
    }),
  });

// 删除
export const deleteTodolist = (id) =>
  fetch("/api/todoList/delete", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ id }),
  });

// 修改
export const updateTodolist = (id, is_finished) =>
  fetch("/api/todoList/update", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      id,
      is_finished: is_finished ? "1" : "0",
    }),
  });
