import { defineStore } from "pinia";
import * as types from "./types";

// https://pinia.esm.dev/introduction.html#a-more-realistic-example
export const useTodosStore = defineStore("todos", {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    filter: types.ALL,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
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
    addTodos(text) {
      this.todos.unshift({ text, id: this.nextId++, isFinished: false });
    },
    finishedOneTodo(obj) {
      const index = this.todos.findIndex((item) => item.id === obj.id);
      this.todos.splice(index, 1, {
        ...obj,
        isFinished: true,
      });
    },
    deleteOne(id) {
      // const index = this.todos.findIndex((item) => item.id === id);

      // this.todos.splice(index, 1);

      this.todos = this.todos.filter((item) => item.id !== id);

      console.log("this.todos", this.todos);
    },
    setInitialData(arr) {
      this.todos = [...arr];
    },
  },
});
