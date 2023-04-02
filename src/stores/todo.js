import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useTodoStore = defineStore('todo',  {
  state: () => ({
    todos: [],
    todoFroms:{
      title: null,
      userId: 1,
      completed: false,
    }
    
  }),
  getters:{

  },
  actions:{
  async  getAllTodos(){
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
       
        // console.log(data);
       this.todos= data;
    },

    async creatTodo(){
      const{data}= await axios.post('https://jsonplaceholder.typicode.com/todos', this.todoFroms)
      console.log(data);
      this.todos.push(data);
      this.todos.reverse();
      this.todoFroms.title =null;
      
    }
  }
})
