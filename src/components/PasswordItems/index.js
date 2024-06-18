import './index.css'

const colors = ['green', 'darkGreen', 'red', 'yellow', 'black']

const PasswordItem = props => {
  const {details, showPassword, deletePasswordRecord} = props
  const {website, username, password, numbers, id} = details
  const firstLetter = website.slice(0, 1)
  const col = colors[numbers]

  const passwordPattern = showPassword ? (
    <p className="para22">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const deleteItem = () => {
    deletePasswordRecord(id)
  }

  return (
    <li className="listEl">
      <div className="password-main">
        <p className={`bg ${col}`}>{firstLetter}</p>
        <div className="pass-sub">
          <p className="heading-pass">{website}</p>
          <p className="para22">{username}</p>
          <p>{passwordPattern}</p>
        </div>
      </div>
      <button className="buttonDel" onClick={deleteItem}>
        <img
          alt="delete"
          className="deleteImage"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
