class Clicker extends React.Component {

  state = {
    counter: 0,
    result: 0
  }

  handleMatchClick(type, number = 1) {
    if (type === 'substraction') {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        result: prevState.result - number
      }))
    } else if (type === 'reset') {
      this.setState(prevState => ({
        counter: 0,
        result: 0,
      }))
    } else if (type === 'addition') {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        result: prevState.result + 1
      }))
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleMatchClick.bind(this, 'substraction', 1)}>-1</button>
        <button onClick={this.handleMatchClick.bind(this, 'addition', 1)}>+1</button>
        <button onClick={this.handleMatchClick.bind(this, 'reset')}>Reset</button>
        <h1>Clicks: {this.state.counter}</h1>
        <h1>Result: {this.state.result}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Clicker />, document.getElementById('root'))