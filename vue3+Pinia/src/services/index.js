// 查询列表
export const getTodolist = (filterType = "2") =>
  fetch("/api/todoList/list?filterType=" + filterType);

// 添加数据
export const addTodolist = (msg, timeStamp) =>
  fetch("/api/todoList/addTodolist", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: {
      msg,
      timeStamp,
    },
  });

// 删除
export const deleteTodolist = (id) =>
  fetch("/api/todoList/deleteTodolist", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `id=${id}`,
  });

// 修改
export const updateTodolist = (id, newType) =>
  fetch("/api/todoList/addTodolist", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: {
      id,
      newType,
    },
  });
