class Editperson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: props.person
    };
  }

  handleChange(event) {
    this.setState({
      person: {
        ...this.state.person,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`localhost:8091/api/person/${this.state.person.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state.person),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          name="name"
          value={this.state.person.name}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          name="email"
          value={this.state.person.email}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}