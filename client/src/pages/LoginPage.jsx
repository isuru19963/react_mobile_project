import React, { Component } from 'react'
// import api from '../api'
// import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


class FormPage extends Component{

    constructor(props) {
        super(props)
        this.state = {
          email : '',
          password: ''
        };
      }
    
      handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/authenticate', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }

      render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <form onSubmit={this.onSubmit}>
              <MDBInput
                label="Your email"
                group
                type="email"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required          
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit" 
                  value="Submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              </form>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="RegPage" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
      }
};

export default FormPage;