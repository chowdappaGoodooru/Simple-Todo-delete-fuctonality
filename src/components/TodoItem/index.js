// Write your code here
import './index.css'

const TodoItem = props => {
  const {userList, deleteFunction} = props
  const {title, id} = userList
  const onClickFunction = () => {
    deleteFunction(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-button" onClick={onClickFunction}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
