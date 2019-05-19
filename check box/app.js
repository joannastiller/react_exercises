const PositiveMessage = () => <p>Możesz kupić bilet i obejrzeć film.</p>;
const NegativeMessage = () => (
  <p>Nie możesz obejrzeć filmu, jeśli masz mniej niż 16 lat.</p>
);

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted)
      this.setState({
        isFormSubmitted: true
      });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1> Kup bilet na najnowszy horror! </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat.</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
