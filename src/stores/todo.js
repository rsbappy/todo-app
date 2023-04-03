import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useTodoStore = defineStore('todo',  {
  state: () => ({
    todos: [],
    todoFroms:{
      title: null,
      userId: 1,
      completed: Boolean,
    },
    editId:0,
    isEdit: false,
   
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
      
    },

    async deleteTodo(id){
      const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      console.log(data);
      this.todos = this.todos.filter(todoData =>{
        return todoData.id !=id;
      })
    },
    async editTodo(id){
      const {data} = await  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoFroms)
      console.log(data);
      this.todoFroms.title =  data.title;
      this.todoFroms.userId =  data.userId;
      this.todoFroms.completed =  data.completed
      // this.todoFroms.completed =  null;
      this.isEdit =true;
      this.editId = id;
 

    },

    async updateTodo(id){
      const {data} = await  axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoFroms)
      console.log(data);
      this.todos.push(data);
      this.todos.reverse();
      this.todoFroms.title =null;
      this.isEdit =false;

    },


    async checkBox(id){
        const {data} = await  axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`)
       console.log(data);


     
       this.todoFroms.completed =  data.completed = true ;
            

    }
    
    
  }
})
