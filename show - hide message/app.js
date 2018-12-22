class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }

  render() {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id pariatur harum nostrum excepturi, rerum consectetur voluptatem impedit ad saepe sint a dolor tempora maxime corporis. Esse suscipit alias quo animi.'

    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{this.state.messageIsActive ? 'Hide' : 'Show'}</button>
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Message />, document.getElementById('root'))