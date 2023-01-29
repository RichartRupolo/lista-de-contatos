class EditContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact
    };
  }

  handleChange(event) {
    this.setState({
      contact: {
        ...this.state.contact,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/contacts', {
      method: 'PUT',
      body: JSON.stringify(this.state.contact),
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
          value={this.state.contact.name}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          name="email"
          value={this.state.contact.email}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}