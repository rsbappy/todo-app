
<script setup>
// Import all libary
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';
// instance and variables
const todoStore = useTodoStore();

// Methods


// hooks, computed, wachter

onMounted(()=>{
  todoStore.getAllTodos();
})

</script>

<template>

  <div class="container">

    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center"> Task List</h4>
            <div class="row mb-3">
              <form action="">
                <div class="col-md-12">
                  <label for="" class="form-label"> Add New Task</label>
                  <input type="text" class="form-control" v-model="todoStore.todoFroms.title">
                </div>
                <div class="mt-2">
                  <input type="button" value="Add task" class="btn btn-success" @click.prevent="todoStore.creatTodo">
                </div>
              </form>
            </div>
          </div>

          <div class="card-body">
            <h4 class="text-danger"> Tasks</h4>
            <ul class="list-group">
              <li v-for="todo in todoStore.todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
               <div>
                <input type="checkbox" name=""  :class="todo.completed ? 'text-decoration-line-through':''" class="form-check-input me-2" id="">
                <span :class="todo.completed ? 'text-decoration-line-through':''"  >
                  {{todo.title}}
                </span>
               </div>
                <a href="" class="btn">
                <i class="fa solid fa-xmark"></i>
              </a>
              </li>

          

            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>

</style>
