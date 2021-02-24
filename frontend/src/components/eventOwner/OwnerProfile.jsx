import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import API_URL from '../../utility/apiConfig'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from 'mdbreact';
// import '../ClassicFormPage.css';

export default function OwnerProfile(props) {
  const { age, phoneNumber, name, role, experience, events, pastEvents, appliedEvents, _id, email, password, gender, language } = props.user;
  const history = useHistory();
  const [editUser, setEditUser] = useState(); // user info
  const [register, setRegister] = useState(true); // to show aleart
  //to add the input inside user

  const onChangeInput = ({ target: { name, value } }) => {
    setEditUser({ ...editUser, [name]: value });
    console.log('onChangeInput', editUser);
  };

  // to add the user info to database
  const onSubmit = (event) => {
    event.preventDefault();
    axios.put(`${API_URL}/api/users/editProfile/${_id}`, editUser)
      .then((res) => {
        props.setAuthCallBack((prev) => ({...prev, currentUser: res.data.user}))
      })
      .catch((err) => console.log(err));
      document.getElementById('myform').reset(); 
  };

  return (
    <MDBContainer>
      <br />
      <br />
      <MDBRow className="justify-content-center">
        <MDBCol md="7">
          <form id="myform">
            <p className="h2 text-center mb-2">Hello {name} </p>
            <p className="p text-center mb-2">Edit Your Profile</p>

            <div className="d-flex flex-nowrap example-parent">
              <div className="w-100 p-3" >
                <label htmlFor="defaultFormNameEx" className="black-text">
                  Name
        </label>
                <input name="name" type="name" id="defaultFormNameEx" className="form-control" onChange={onChangeInput} />
              </div>

              <div className="w-100 p-3">
                <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                  Password
        </label>
                <input name="password" type="password" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
              </div>
            </div>
            <div className="text-center mt-4">
              <MDBBtn color="deep-purple darken-1" type="submit" onClick={onSubmit}>Submit</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </MDBContainer>
  );
};
