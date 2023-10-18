// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirst = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLast = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button
            type="button"
            className="click-button"
            onClick={this.onShowFirst}
          >
            Show/Hide Firstname
            {showFirstName && (
              <div className="cont-para">
                <p className="name">Joe</p>
              </div>
            )}
          </button>

          <button
            type="button"
            className="click-button"
            onClick={this.onShowLast}
          >
            Show/Hide Lastname
            {showLastName && (
              <div className="cont-para">
                <p className="name">Jonas</p>
              </div>
            )}
          </button>
        </div>
      </div>
    )
  }
}
export default ShowHide
