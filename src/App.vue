
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
                  <label for="" class="form-label"> 
                    <span v-if="!todoStore.isEdit"> Add New Task</span> 
                    <span v-else> Update Task</span> 
                    </label>
                  <input type="text" class="form-control" v-model="todoStore.todoFroms.title">
                </div>
                <div class="mt-2" v-if="!todoStore.isEdit">
                  <input type="button" value="Add New task" class="btn btn-success" @click.prevent="todoStore.creatTodo">
                </div>
                <div class="mt-2" v-else="">
                  <input type="button" :class="todoStore.isEdit ? 'btn-warning': ''" value="Update Task" class="btn" @click.prevent="todoStore.updateTodo(todoStore.editId)">
                </div>
              </form>
            </div>
          </div>

          <div class="card-body">
            <h4 class="text-danger"> Tasks</h4>
            <ul class="list-group">
              <li v-for="(todo,index) in todoStore.todos" :key="todo.id " class="list-group-item d-flex justify-content-between align-items-center">
               <div>
                <input v-model="todo.completed" type="checkbox" name=""  class="form-check-input me-2 text-decoration-line-through"   id="">
                <span :class="todo.completed ? 'text-decoration-line-through':''"  >
                  {{todo.title}}
                </span>
               </div>
              <div>
                <button  class="btn" @click.prevent="todoStore.editTodo(todo.id)" >
                  <i class="fa solid fa-edit"></i>
               </button>
                <button  class="btn" @click.prevent="todoStore.deleteTodo(todo.id)">
                  <i class="fa solid fa-xmark"></i>
               </button>
              </div>
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
