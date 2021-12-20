<script setup>
import { ref, readonly, reactive, onBeforeMount } from 'vue';
import { ElInput, ElButton, ElSelect, ElCard, ElEmpty, ElMessage, ElScrollbar, ElTag } from 'element-plus';
import { useTodosStore } from "../store";
import * as types from "../store/types";

const inputVal = ref('');
const value = ref(types.ALL);
const options = readonly([{
  value: types.FINISHED,
  label: '完成',
}, {
  value: types.UNFINISHED,
  label: '未完成',
}, {
  value: types.ALL,
  label: '全部',
}]);

const state = reactive({
  todoList: []
});

const todosStore = useTodosStore();

const handleAdd = () => {
  if (!inputVal.value) {
    ElMessage.closeAll();

    ElMessage({
      message: '输入不可为空',
      type: 'warning',
    });
    return;
  }

  todosStore.$patch(todosStore.addTodos(inputVal.value));
  inputVal.value = "";
  value.value = types.ALL;
  todosStore.filter = types.ALL;

  state.todoList = todosStore.filterTodos;
}

const handleFinisehd = (data) => {
  todosStore.$patch(todosStore.finishedOneTodo(data));
}

const handleDelete = obj => {
  todosStore.$patch(todosStore.deleteOne(obj.id));

  state.todoList = todosStore.filterTodos;
}

const handleSelectChange = (val) => {
  todosStore.filter = val;

  state.todoList = todosStore.filterTodos;
}

onBeforeMount(() => {
  state.todoList = todosStore.todos;
});

</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-input v-model="inputVal" placeholder="Please input">
          <template #append>
            <el-button type="primary" @click="handleAdd">添加</el-button>
          </template>
        </el-input>
        <div class="filterWrap">
          <span>请筛选：</span>
          <el-select v-model="value" placeholder="Select" @change="handleSelectChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </template>
    <div class="card-body">
      <el-empty v-if="state.todoList.length === 0" description="暂无数据"></el-empty>

      <el-scrollbar v-else height="300px">
        <div v-for="item in state.todoList" :key="item.id" class="scrollbar-demo-item">
          <div>
            <el-tag
              :type="item.isFinished ? 'success' : 'warning'"
            >{{ item.isFinished ? '完成' : '未完成' }}</el-tag>
            <span style="margin-left: 10px;">{{ item.text }}</span>
          </div>
          <div>
            <el-button
              v-if="item.isFinished"
              type="danger"
              size="small"
              @click="handleDelete(item)"
            >删除</el-button>
            <el-button size="small" type="primary" v-else @click="handleFinisehd(item)">标记完成</el-button>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-card>
</template>

<style scoped>
.filterWrap {
  text-align: right;
}
.filterWrap {
  text-align: right;
  margin: 10px 0;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background: var(--el-color-info-lighter);
  color: var(--el-color-primary);
  box-sizing: border-box;
}
</style>
