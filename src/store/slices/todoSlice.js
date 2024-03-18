import { createSlice } from '@reduxjs/toolkit'

// в слайс мы передаем объект
const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: []
   },
   reducers: {
      addTodo(state, action) {
         console.log(state)
         console.log(action)

         state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: false
         })
      },
      removeTodo(state, action) {
         console.log(state)
         console.log(action)

         state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      },
      toggleTodoComplete(state, action) {
         console.log(state)
         console.log(action)

         state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
      }
   }
})

// вообще автоматически создается объект, содержащий и actions, и reducer, что ниже
// эти actions (addTodo, removeTodo, toggleTodoComplete) создаются автоматически
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions
// из тех редьюсеров, что выше, автотматически формируется редьюсер todoSlice.reducer, именно эту сущность нужно подключить в наш store
export default todoSlice.reducer