import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import classes from './SignIn.module.css';
class SignInForm extends Component {
  
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler(this.state);
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={classes.formCenter}>
        <form className={classes.formField} onSubmit={this.handleSubmit}>
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="email">
              E-Mail Address
             </label> 
            <Form.Control
              type="email"
              id="email"
              className={classes.formFieldInput}
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            
          </div>

          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="password">
              Password
            </label> 
            <Form.Control
              type="password"
              id="password"
              className={classes.formFieldInput}
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
           
          </div>

          <div className={classes.formField}>
            <button className={classes.formFieldButton } style={{}}>Sign In</button>{" "}
            {/* <Link to="/" className={classes.formFieldLink}>
              Create an account
            </Link> */}
          </div>

        </form >        
          </div >
      
    
    );
    }
}

export default SignInForm;