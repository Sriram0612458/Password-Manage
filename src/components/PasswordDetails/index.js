import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItems'
import './index.css'

class PasswordDetails extends Component {
  state = {
    initialList: [],
    website: '',
    username: '',
    password: '',
    searchValue: '',
    isTrue: false,
  }
  Submitted = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    let colorsPicker = Math.floor(Math.random() * 5)

    const addingList = {
      id: uuidv4(),
      website: website,
      username: username,
      password: password,
      numbers: colorsPicker,
    }
    this.setState(prev => ({
      initialList: [...prev.initialList, addingList],
      website: '',
      username: '',
      password: '',
    }))
  }
  webChange = event => {
    this.setState({website: event.target.value})
  }

  UserChange = event => {
    this.setState({username: event.target.value})
  }

  PassChange = event => {
    this.setState({password: event.target.value})
  }
  searchbar = event => {
    this.setState({searchValue: event.target.value})
  }

  getSearchRecords = () => {
    const {initialList, searchValue} = this.state
    return initialList.filter(eachRecord =>
      eachRecord.website.toLowerCase().includes(searchValue.toLowerCase()),
    )
  }
  check = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }
  deleteing = id => {
    const {initialList} = this.state
    const filteredPasswordRecords = initialList.filter(e => e.id !== id)

    this.setState({initialList: filteredPasswordRecords})
  }

  render() {
    const {website, username, password, initialList, isTrue} = this.state

    const filteredlist = this.getSearchRecords()
    const count = filteredlist.length
    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="main-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="logo-image-2"
            alt="password manager"
          />
          <div className="main-2">
            <form className="form-element" onSubmit={this.Submitted}>
              <h1 className="main-heading">Add New Password</h1>
              <div className="input-container">
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="logoImage"
                  />
                </div>
                <input
                  type="text"
                  className="inputEle"
                  placeholder="Enter Website"
                  onChange={this.webChange}
                  value={website}
                />
              </div>
              <div className="input-container">
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="logoImage"
                  />
                </div>
                <input
                  type="text"
                  className="inputEle"
                  placeholder="Enter Username"
                  onChange={this.UserChange}
                  value={username}
                />
              </div>
              <div className="input-container">
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="logoImage"
                  />
                </div>
                <input
                  type="password"
                  className="inputEle"
                  placeholder="Enter Password"
                  onChange={this.PassChange}
                  value={password}
                />
              </div>
              <button type="submit" className="button1">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="main-3">
          <div className="main-3-div">
            <div className="main-3-sub">
              <h1 className="main-3-heading">Your Passwords</h1>
              <p className="main-para-3">{count}</p>
            </div>

            <div className="input-container">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="logoImage"
                />
              </div>
              <input
                type="search"
                className="inputEle main-3-width"
                placeholder="Search"
                onChange={this.searchbar}
              />
            </div>
          </div>
          <hr className="main-hr" />
          <div className="checkboxEle">
            <input type="checkbox" id="aa" onChange={this.check} />
            <label htmlFor="aa">Show passwords</label>
          </div>
          {count !== 0 ? (
            <ul className="list">
              {filteredlist.map(each => (
                <PasswordItem
                  details={each}
                  key={each.id}
                  showPassword={isTrue}
                  deletePasswordRecord={this.deleteing}
                />
              ))}
            </ul>
          ) : (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-title">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordDetails
