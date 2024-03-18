import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete } from "../store/slices/todoSlice"

const TodoItem = ({ id, text, completed }) => {

   const dispatch = useDispatch()

   const removeTask = () => {
      dispatch(removeTodo({ id }))
   }

   const toggleTaskComplete = () => {
      dispatch(toggleTodoComplete({ id }))
   }

   return (
      <li className="todoItem">
         <input type="checkbox" checked={completed} onChange={toggleTaskComplete} />
         <div className={completed === true ? 'completed' : ''}>{text}</div>
         <span className="delete" onClick={removeTask}>&times;</span>
      </li>
   )
}

export default TodoItem