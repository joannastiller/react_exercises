const ValidationMessage = props => <p>{props.txt}</p>;

const PurchaseForm = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="checkbox"
        id="age"
        onChange={props.change}
        checked={props.checked}
      />
      <label htmlFor="age">Mam co najmniej 16 lat.</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

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
        return <ValidationMessage txt="Możesz kupić bilet i obejrzeć film." />;
      } else {
        return (
          <ValidationMessage txt="Nie możesz obejrzeć filmu, jeśli masz mniej niż 16 lat." />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <React.Fragment>
        <h1> Kup bilet na najnowszy horror! </h1>
        <PurchaseForm
          change={this.handleCheckboxChange}
          submit={this.handleSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
