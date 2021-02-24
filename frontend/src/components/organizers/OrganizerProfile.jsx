import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import API_URL from '../../utility/apiConfig'
import { Formik, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../../utility/validation'
import { Form, Button, Card, Accordion } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from 'mdbreact';
// import '../ClassicFormPage.css';

export default function OrganizerProfile(props) {
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
        props.setAuthCallBack((prev) => ({...prev, currentUser: res.data.user }))
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
              <p className="h2 text-center mb-2">Hello {name}</p>
              <p className="p text-center mb-2">Edit Your Profile</p>
              <div className="d-flex flex-nowrap example-parent">



                <div className="w-100 p-3" >
                  <label htmlFor="defaultFormNameEx" className="black-text">
                    Name {name}
                </label>
                  <input  name="name" type="text" id="defaultFormNameEx" className="form-control" onChange={onChangeInput} />
                </div>

                <div className="w-100 p-3">
                  <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                    Password
                </label>
                  <input name="password" type="password" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
                </div>
              </div>

              <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3" >
                  <label htmlFor="defaultFormNameEx" className="black-text">
                    Email {email}
                </label>
                  <input  name="email" type="text" id="defaultFormNameEx" className="form-control" onChange={onChangeInput} />
                </div>

                <div className="w-100 p-3">
                  <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                    Phone Number {phoneNumber}
                </label>
                  <input name="phoneNumber" type="text" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
                </div>
              </div>

              <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3">
                  <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                    Previous Experience
                </label>
                  <input name="experience" type="password" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
                </div>

                <div className="w-100 p-3">
                  <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                    Age {age}
                </label>
                  <input name="age" type="text" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
                </div>
              </div>

              <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3" >
                  <label htmlFor="defaultFormNameEx" className="black-text">
                    Gender {gender}
                </label>
                  <MDBFormInline >

                    <MDBInput
                      name="selectedRole" value="male"
                      label='Male'
                      name="gender"
                      type='radio'
                      id='radio1'
                      containerClass='mr-5'
                      onChange={onChangeInput}
                    />
                    {/* condition */}
                    {gender === "male" &&
                      <MDBInput
                        name="selectedRole" value="male"
                        label='Male'
                        name="gender"
                        type='radio'
                        id='radio1'
                        containerClass='mr-5'
                        onChange={onChangeInput}
                        checked
                      />
                    }

                    <MDBInput
                      name="selectedRole" value="female"
                      label='Female'
                      name="gender"
                      type='radio'
                      id='radio2'
                      containerClass='mr-9'
                      onChange={onChangeInput}
                    />
                    {/* condition */}
                    {gender === "female" &&
                      <MDBInput
                        name="selectedRole" value="female"
                        label='Female'
                        name="gender"
                        type='radio'
                        id='radio2'
                        containerClass='mr-9'
                        onChange={onChangeInput}
                        checked
                      />
                    }
                  </MDBFormInline >
                </div>

                <div className="w-100 p-3" >
                  <label htmlFor="defaultFormNameEx" className="black-text">
                    Languages {language[0]} , {language[1]}
                </label>

                  <MDBFormInline >
                    <div class="custom-control custom-checkbox custom-control-inline justify-content-around p-2">
                      <input name="language" type="checkbox" class="custom-control-input" id="defaultInline1" onChange={onChangeInput} />
                      <label class="custom-control-label" for="defaultInline1">Arabic</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input name="language" type="checkbox" class="custom-control-input" id="defaultInline2" onChange={onChangeInput} />
                      <label class="custom-control-label" for="defaultInline2">English</label>
                    </div>
                  </MDBFormInline >
                  <Form>

{/*   <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload your CV" />
  </Form.Group> */}
  
</Form>

                </div>
              </div>

              <div className="text-center mt-4">
                <MDBBtn color="deep-purple darken-1" type="submit" onClick={(e) => onSubmit(e)}>Submit</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <br />
    </MDBContainer>
  );
};