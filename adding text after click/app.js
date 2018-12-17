class App extends React.Component {
  state = {
    text: ""
  };

  handleClick = () => {
    const letter = "a";
    this.setState({
      text: this.state.text + letter
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add 'a'</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
