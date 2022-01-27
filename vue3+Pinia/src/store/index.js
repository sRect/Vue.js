import { defineStore } from "pinia";
import * as types from "./types";

// https://pinia.esm.dev/introduction.html#a-more-realistic-example
export const useTodosStore = defineStore("todos", {
  state: () => ({
    /** @type {{ msg: string, id: string, is_finished: boolean, create_time: date }[]} */
    todos: [],
    filter: types.ALL,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.is_finished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.is_finished);
    },
    filterTodos(state) {
      if (this.filter === types.FINISHED) {
        return this.finishedTodos;
      } else if (this.filter === types.UNFINISHED) {
        return this.unfinishedTodos;
      }

      return this.todos;
    },
  },
  actions: {
    addTodos({ id, msg, create_time }) {
      this.todos.unshift({ id, msg, create_time, is_finished: false });
    },
    finishedOneTodo(obj) {
      const index = this.todos.findIndex((item) => item.id === obj.id);
      this.todos.splice(index, 1, {
        ...obj,
        is_finished: true,
      });
    },
    deleteOne(id) {
      // const index = this.todos.findIndex((item) => item.id === id);

      // this.todos.splice(index, 1);

      this.todos = this.todos.filter((item) => item.id !== id);
    },
    setInitialData(arr) {
      this.todos = [...arr];
    },
  },
});
