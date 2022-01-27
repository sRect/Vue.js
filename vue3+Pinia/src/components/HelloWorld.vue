<script setup>
import { ref, readonly, reactive, onBeforeMount, onMounted } from 'vue';
import { ElInput, ElButton, ElSelect, ElCard, ElEmpty, ElMessage, ElScrollbar, ElTag, ElLoading } from 'element-plus';
import debounce from "lodash/debounce";
import { useTodosStore } from "../store";
import * as types from "../store/types";
import { getTodolist, addTodolist, updateTodolist, deleteTodolist } from "../services"

const inputVal = ref('');
const loadingRef = ref(null);
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

// 添加
const handleAdd = debounce(() => {
  if (!inputVal.value) {
    ElMessage.closeAll();

    ElMessage({
      message: '输入不可为空',
      type: 'warning',
    });
    return;
  }

  addTodolist(inputVal.value, new Date().getTime())
    .then(res => res.json())
    .then((res) => {
      if (res && res.code === 200) {
        const { id, create_time } = res.data;

        todosStore.$patch(todosStore.addTodos({ id, msg: inputVal.value, create_time }));
        inputVal.value = "";
        value.value = types.ALL;
        todosStore.filter = types.ALL;

        state.todoList = todosStore.filterTodos;
      }

      ElMessage({
        message: '添加成功',
        type: 'success',
      });
    })
    .catch(e => {
      console.log(e);
      ElMessage({
        message: '添加失败,请重试',
        type: 'error',
      });
    });
}, 300);

// 修改
const handleFinisehd = debounce((data) => {
  updateTodolist(data.id, !data.is_finished)
    .then(res => res.json())
    .then(res => {
      ElMessage({
        message: '修改成功',
        type: 'success',
      });

      todosStore.$patch(todosStore.finishedOneTodo(data));
    })
    .catch(e => {
      console.log(e);
      ElMessage({
        message: '修改失败,请重试',
        type: 'error',
      });
    });
}, 300);

// 删除
const handleDelete = debounce(obj => {
  deleteTodolist(obj.id)
    .then(res => res.json())
    .then(() => {
      ElMessage({
        message: '删除成功',
        type: 'success',
      });

      todosStore.$patch(todosStore.deleteOne(obj.id));
      state.todoList = todosStore.filterTodos;
    })
    .catch(e => {
      console.log(e);
      ElMessage({
        message: '删除失败,请重试',
        type: 'error',
      });
    });
}, 300);

const handleSelectChange = (val) => {
  todosStore.filter = val;

  state.todoList = todosStore.filterTodos;
}

onBeforeMount(() => {
  loadingRef.value = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });

  // 查询
  getTodolist("2")
    .then(res => res.json())
    .then(res => {

      console.log(res);
      if (res.code === 200) {
        const arr = res.data;
        if (Array.isArray(arr)) {
          todosStore.$patch(todosStore.setInitialData(arr));
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        loadingRef.value && loadingRef.value.close();
      }, 1000);
    });

});

onMounted(() => {
  setTimeout(() => {
    console.log("===>", todosStore.todos)
    state.todoList = todosStore.todos;
  }, 1000)
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
            <div class="content">
              <el-tag
                :type="item.is_finished ? 'success' : 'warning'"
              >{{ item.is_finished ? '完成' : '未完成' }}</el-tag>
              <span style="margin-left: 10px;">{{ item.msg }}</span>
              <el-button
                v-if="item.is_finished"
                type="danger"
                size="small"
                @click="handleDelete(item)"
              >删除</el-button>
              <el-button size="small" type="primary" v-else @click="handleFinisehd(item)">标记完成</el-button>
            </div>
            <div class="time">
              <el-tag type="info">{{ item.create_time }}</el-tag>
            </div>
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
  height: 70px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background: var(--el-color-info-lighter);
  color: var(--el-color-primary);
  box-sizing: border-box;
}

.scrollbar-demo-item .time {
  margin-top: 5px;
  display: flex;
}

.scrollbar-demo-item .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
