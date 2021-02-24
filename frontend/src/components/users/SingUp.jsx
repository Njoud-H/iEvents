import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import API_URL from '../../utility/apiConfig'
import { Formik, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../../utility/validation'
import { Alert } from "react-bootstrap";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBFormInline
} from "mdbreact";


export default function SingUp() {
  const history = useHistory();
  const [user, setUser] = useState({}); // user info
  const [register, setRegister] = useState(true); // to show aleart
  const [p, setP] = useState({
    email: {
      value: "",
      valid: false
    },

    password: {
      value: "",
      valid: false
    },
  })
  // console.log('p', p);

  //to add the input inside user
  const onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  console.log('user',user)

  // to add the user info to database
  const onSubmit = (e) => {
    e.preventDefault();

    setP({ 
      email: { valid: !!user.email },
      password: { valid: !!user.password }
    })
    console.log('p', p);

    console.log('user', user)
    axios
      .post(`${API_URL}/api/users/signup`, user)
      .then((res) => {
        const user = res.data.user;
        if (user) {
          history.push("/login");
        } else {
          setTimeout(() => {
            setRegister(false);
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <MDBContainer>

      {!register && (
        <Alert variant={"danger"}>
          The email is already in use. Please change the email
        </Alert>
      )}

      <MDBRow className="justify-content-center">
        <MDBCol md="5">
          <br />
          <br />
          <MDBCard>
            <MDBCardBody>
              <br />
              <MDBCardHeader className="form-header rounded">

                <h3 className="text-center my-3">
                  <strong>User Register</strong>
                </h3>
              </MDBCardHeader>

              <form>
                <div className="black-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    name="name"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onChangeInput}
                  />

                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    // value={p.email.value}
                    className={p.email.valid ? "form-control is-valid" : "form-control is-invalid"}
                    group
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                    required
                    onChange={onChangeInput}
                  />

                  <MDBInput
                    label="Your password"
                    icon="lock"
                    // value={p.password.value}
                    className={p.password.valid ? "form-control is-valid" : "form-control is-invalid"}
                    group
                    name="password"
                    type="password"
                    validate
                    required
                    onChange={onChangeInput}
                  />
                </div>


                <div className=" d-flex justify-content-center">
                  <MDBFormInline >
                    <MDBInput
                      name="role" value="owner"
                      label='Event Owner'
                      type='radio'
                      id='radio1'
                      containerClass='mr-5'
                      onChange={onChangeInput}
                    />
                    <MDBInput
                      name="role" value="organizer"
                      label='Organizer'
                      type='radio'
                      id='radio2'
                      containerClass='mr-9'
                      onChange={onChangeInput}
                    />
                  </MDBFormInline >
                </div>
                <div className="text-center mt-4">
                  <MDBBtn
                    color="deep-purple darken-1 white-text"
                    className="mb-3"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                  >
                    Submit
                      </MDBBtn>
                </div>
              </form>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
    </MDBContainer>


    // <>
    //     <h1>Sign Up</h1>
    //     {!register && (
    //         <Alert variant={"danger"}>
    //             The email is already in use. Please change the email
    //         </Alert>
    //     )}

    //     <Formik
    //         initialValues={{
    //             email: '',
    //             password: '',
    //             confirmPassword: ''
    //         }}
    //         validationSchema={validationSchema}
    //         onSubmit={(e) => onSubmit(e)}

    //         render={({ errors, status, touched }) => (

    //             <Form>
    //                 <div className="form-group">
    //                     <label htmlFor="email">Email</label>
    //                     <Field name="email" type="text" onKeyUp={onChangeInput} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
    //                     <ErrorMessage name="email" component="div" className="invalid-feedback" />
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="password">Password</label>
    //                     <Field name="password" type="password" onKeyUp={onChangeInput} className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
    //                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="confirmPassword">Confirm Password</label>
    //                     <Field name="confirmPassword" type="password" onKeyUp={onChangeInput} className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
    //                     <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
    //                 </div>
    //                 <div className="form-group">
    //                     <Button
    //                         variant="primary"
    //                         type="submit"
    //                         onClick={(e) => onSubmit(e)}
    //                     >
    //                         Submit
    //               </Button>
    //                 </div>
    //             </Form>


    //         )}
    //     />
    // </>

  );
};
