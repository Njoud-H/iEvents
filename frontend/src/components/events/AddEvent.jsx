import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import API_URL from '../../utility/apiConfig'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../../utility/validation'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


export default function AddEvent(props) {
    
    const history = useHistory();
    const [event, setEvent] = useState({});

    const onChangeInput = ({ target: { name, value } }) => {
        setEvent({ ...event, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/api/events/add`, { event, user: props.user })
            .then((res) => {
                history.push("/MyEvents");
            })

    };

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    location: '',
                    eventType: '',
                    description: '',
                    startDate: '',
                    endDate: '',
                    startTime: '',
                    endTime: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(e) => onSubmit(e)}

                render={({ errors, status, touched }) => (

                    <MDBContainer>
                        <br />
                        <br />
                        <MDBRow className="justify-content-center">
                            <MDBCol md="7">
                                <form>
                                    <p className="h2 text-center mb-2">Event Details</p>

                                    <div className="d-flex flex-nowrap example-parent">
                                        <div className="w-100 p-3" >
                                            <label htmlFor="name" className="black-text">
                                                Event name
                </label>
                                            <input name="name" type="text" onKeyUp={onChangeInput} className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="w-100 p-3">
                                            <label htmlFor="location" className="black-text">
                                                Location
                </label>
                                            <input name="location" type="location" onKeyUp={onChangeInput} className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-nowrap example-parent">
                                        <div className="w-100 p-3" >
                                            <label htmlFor="eventType" className="black-text">
                                                Event type
                </label>
                                            <div className="w-100">
                                                <select name="eventType" id="eventType" onChange={onChangeInput}>
                                                    <option value="Conferences">Conference</option>
                                                    <option value="Festival">Workshop</option>
                                                    <option value="Festival">Reunion</option>
                                                    <option value="Festival">Festival</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-100 p-3">
                                            <label htmlFor="location" className="black-text">
                                                Date
                </label>
                                            <div>

                                                <label for="startDate"><strong>From:</strong> </label>
                                                {/* <input type="date" ></input> */}
                                                <input type="date" id="startDate" name="startDate" onChange={e => onChangeInput(e)} />
                                                <div className="w-100 ">
                                                    <label for="endDate"><strong>To:</strong>  </label>
                                                    <input type="date" id="endDate" name="endDate"
                                                        onChange={onChangeInput} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-nowrap example-parent">
                                        <div className="w-100 p-3" >
                                            <label htmlFor="eventType" className="black-text">
                                                Duration (Time)
                </label>
                                            <div className="form-group">
                                                <label for="startTime"><strong>Start Time:</strong></label>
                                                <input type="time" id="startTime" name="startTime" onChange={onChangeInput} />
                                            </div>
                                            <div className="form-group">
                                                <label for="endTime"><strong>End Time:</strong></label>
                                                <input type="time" id="endTime" name="endTime" onChange={onChangeInput} />
                                            </div>
                                        </div>

                                        <div className="w-100 p-3">
                                            <label htmlFor="description" className="black-text">
                                                Description
                </label>
                                            <div>
                                                <input name="description" type="description" onChange={onChangeInput} className="form-control" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text-center mt-4">
                                        <MDBBtn
                                            color="deep-purple darken-1 white-text"
                                            className="mb-" type="submit" onClick={(e) => onSubmit(e)}>
                                            Submit
                  </MDBBtn>
                                    </div>

                                </form>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <br />
                        <br />
                    </MDBContainer>
                )}
            />
        </>
    )
}
