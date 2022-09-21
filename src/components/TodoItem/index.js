// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteIt} = props
  const {title, id} = todoItem

  const deleteItem = () => {
    deleteIt(id)
  }

  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <button onClick={deleteItem} type="button" className="btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
