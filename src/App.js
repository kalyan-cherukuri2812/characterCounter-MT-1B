import './App.css'

// Replace your code here
import {Component} from 'react'
import {v4} from 'uuid'

class App extends Component {
  state = {input: '', list: []}

  inputEnter = event => {
    this.setState({input: event.target.value})
  }

  add = () => {
    const {input} = this.state
    const item = {text: input, id: v4()}
    this.setState(prev => ({list: [...prev.list, item], input: ''}))
  }

  render() {
    const {list, input} = this.state
    console.log(list)
    return (
      <div className="bg-container">
        <div className="bg-card">
          <div className="card-1">
            <h1 className="card-1-h">Count the characters like a Boss</h1>
            {list.length <= 0 ? (
              <img
                className="no-input-img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                alt="no user inputs"
              />
            ) : (
              <ul>
                {list.map(each => (
                  <li key={each.id}>
                    <p className="list-item">
                      {each.text} : {each.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="card-2">
            <h1 className="card-2-h">Character Counter</h1>
            <form onSubmit={this.add} className="input-div">
              <input
                value={input}
                onChange={this.inputEnter}
                className="input"
                type="text"
                placeholder="Enter the Characters here"
              />
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
