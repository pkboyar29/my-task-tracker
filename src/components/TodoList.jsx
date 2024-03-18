import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem";

const TodoList = () => {

   const todos = useSelector(state => state.todos.todos)


   return (
      <ul className="todoList">
         {
            todos.map(todo => <TodoItem id={todo.id} text={todo.text} completed={todo.completed} {...todo} />)
         }
      </ul>
   )
}

export default TodoList