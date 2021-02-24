import React, { useState } from 'react'
import { DropdownButton } from 'react-bootstrap';
import { DropdownItem, Dropdown } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBInput, MDBFormInline } from 'mdbreact';
import { card, Col, Form, Button } from 'react-bootstrap'

import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import API_URL from '../../utility/apiConfig'
import { Formik, Field, ErrorMessage } from 'formik';
// import { validationSchema } from '../../utility/validation'



export default function ApplyingForm(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    shifts: []
  }); // user info
  // const [register, setRegister] = useState(true); // to show aleart

  const [selectEvent, setSelectEvent] = useState(props.selectEvent)
  // const { _id, description } = selectEvent
  //   const { name, role, experience, events, pastEvents, appliedEvents, _id } = props.auth.currentUser;
  // console.log('selectEvent',selectEvent);
  // const { _id } = props.auth.currentUser;
  const { id } = useParams()

  console.log('id', id)

  //to add the input inside user
  const onChangeInput = ({ target: { name, value } }) => {
    console.log(name, value);
    if (name == 'shifts') {
      setFormData({ ...formData, shifts: [...formData.shifts, value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    console.log('formData', formData);
  };

  // to add the user info to database
  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL}/api/events/applyingForm`, { formData, event: id })//{ formData, user: props.user }
      .then((res) => {
        // let userId = req.params.userId
        console.log("formData", formData)
        // const user = res.data.user;
        history.push("/allEvents");
      })
      .catch((err) => console.log(err));
    document.getElementById('myform').reset();
  }






  // const history = useHistory();
  // const { id } = useParams()
  // const [comment, setComment] = useState([]); 
  // const [selectMansion, setSelectMansion] = useState(props.selectMansion)

  //   //to add the input inside user
  //   const onChangeInput = ({ target: { name, value } }) => {
  //     setComment({ ...comment, [name]: value });
  //   };


  // const onSubmit = (event) => {
  //   event.preventDefault();
  // console.log("Id = " ,selectMansion._id )
  //   console.log("mansion = " ,comment )
  //   axios.post(`${API_URL}/api/mansion/add/${selectMansion._id}`, comment)
  //     .then((res) => {

  //       history.push("/AllMansion");

  //   })
  // };



  return (
    <>
      <div>
        <br />
        <br />
        <br />
        {/* <h1 className="mt-10" style={{ textAlign: "center" }}>My Events</h1> */}


        {/* form */}

        <MDBContainer>
          <br />
          <br />
          <MDBRow className="justify-content-center">
            <MDBCol md="7">
              <form id="myform">
                <p className="h1 text-center mb-2"><strong>Create an Applying Form</strong></p>

                <br />
                <div className="d-flex flex-nowrap example-parent">
                  <div className="w-100 p-3" >
                    <label htmlFor="defaultFormNameEx" className="black-text">
                      Description
        </label>
                    <input name='description' type="text" id="defaultFormNameEx" className="form-control" onChange={onChangeInput} />
                  </div>

                  <div className="w-100 p-3">
                    <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                      Requirement
        </label>
                    <input name='requirement' type="text" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
                  </div>
                </div>

                <div className=" d-flex justify-content-center">
                  <div className="w-100 p-3">
                    <label htmlFor="defaultFormLoginPasswordEx" className="black-text">Shifts</label>

                    <MDBFormInline >
                      <MDBInput
                        name="shifts" value="Morning"
                        label='Morning'
                        type='checkbox'
                        id='radio1'
                        containerClass='mr-4'
                        onChange={onChangeInput}
                      />
                      <div class="custom-control custom-checkbox custom-control-inline justify-content-around p-2">
                        <MDBInput
                          name="shifts" value="Night"
                          label='Night'
                          type='checkbox'
                          id='radio2'
                          containerClass='mr-9'
                          onChange={onChangeInput}
                        />
                      </div>
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <MDBInput
                          name="shifts" value="Both"
                          label='Both'
                          type='checkbox'
                          id='radio2'
                          containerClass='mr-2'
                          onChange={onChangeInput}
                        />
                      </div>
                    </MDBFormInline >

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



      </div>
    </>
  )
}
