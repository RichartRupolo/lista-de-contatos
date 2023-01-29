import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      if(res.data.success){
        this.props.history.push('/home');
      }else{
        this.setState({error: 'Invalid Credentials'})
      }
    })
    .catch(err => {
      console.log(err);
      this.setState({error: 'Error Occured'});
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={e => this.setState({email: e.target.value})} 
        />
        <br></br>
        <input 
          type="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={e => this.setState({password: e.target.value})} 
        />
        <br></br>

        <button type="submit">Login</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}

export default (Login);
