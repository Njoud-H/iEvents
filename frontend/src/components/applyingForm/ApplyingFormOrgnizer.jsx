import React, { useState, useEffect } from 'react'
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
  // const history = useHistory();
  const [formData, setFormData] = useState({
    shifts: []
  }); // user info
  // const [register, setRegister] = useState(true); // to show aleart

  // const [selectEvent, setSelectEvent] = useState(props.selectEvent)
  // const { _id, description } = selectEvent
  //   const { name, role, experience, events, pastEvents, appliedEvents, _id } = props.auth.currentUser;
  // console.log('selectEvent',selectEvent);
  // const { _id } = props.auth.currentUser;
  // const { id } = useParams()

  const { _id } = props.auth.currentUser;
  console.log('props.auth.currentUser', props.auth.currentUser)
  const history = useHistory();
  const { id } = useParams()
  const [applingform, setApplingform] = useState({
    shifts: [''],

  })
  // const { _id, description } = applingform

  // console.log('props.SelectEvent', props.selectEvent);

  useEffect(() => {

    axios.get(`${API_URL}/api/events/AppliyingForm`)
      .then(res => {
        console.log('res', res.data.msg)
        let event = res.data.msg.find(ele => ele.event._id == id)
        console.log('event', event)
        setApplingform(event)
      })

  }, [])


  console.log('applingform', applingform)
  // const { description, event, requirement, shifts } = applingform
  //to add the input inside user
  const onChangeInput = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    console.log('formData', formData);
  };

  // to add the user info to database
  console.log('_id', _id)
  const onSubmit = (e) => {
    e.preventDefault();

    console.log("props.selectEvent", props.selectEvent)
    axios.post(`${API_URL}/api/events/applyingForm/${applingform._id}`, { formData, orgnizer: _id })//{ formData, user: props.user }
      .then((res) => {
        // let userId = req.params.userId
        console.log("formData", formData)
        // const user = res.data.user;
        history.push("/MyAppliedForm");
      })
      .catch((err) => console.log(err));
    document.getElementById('myform').reset();
  }


  const shifts = applingform.shifts.map(ele => {
    return <MDBInput
      name="shift" value={ele}
      label={ele}
      type='radio'
      id='radio1'
      containerClass='mr-5'
      onChange={onChangeInput}
    />
  })


  return (
    <>
      <div>
        <br />
        <br />
        <br />


        {/* form */}

        <MDBContainer>
          <br />
          <br />
          <MDBRow className="justify-content-center">
            <MDBCol md="7">
              <form id="myform">
                <p className="h2 text-center mb-2">Applying Form</p>
                <br />

                <div className="d-flex flex-nowrap example-parent">
                  <div className="w-100 p-3" >
                    <p>Description:  <strong>{applingform.description}</strong></p>
                  </div>

                  <div className="w-100 p-3">
                    <p>Requirement: <strong>{applingform.requirement}</strong></p>
                  </div>
                </div>

                <div className="d-flex flex-nowrap example-parent">
                  <div className="w-100 p-3" >
                    <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                      Shifts
                </label>
                    <MDBFormInline >
                      {shifts}
                    </MDBFormInline >
                  </div>


                  <div className="w-100 p-3">
                    <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                      Massage
        </label>
                    <input type="text" name="massage" id="defaultFormLoginPasswordEx" className="form-control" onChange={onChangeInput} />
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
