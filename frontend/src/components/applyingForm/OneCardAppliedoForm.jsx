import React, { useState } from "react";
// import { Col, Card } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import axios from "axios";
import API_URL from '../../utility/apiConfig';
import OneCardAppliedResponse from './OneCardAppliedResponse'


export default function OneCardAppliedOrganizer(props) {
    const history = useHistory();

    const { responses, massage, shifts, appliedOrganizers, description, requirement, event, _id } = props.form
    console.log('props.form', props.form)

    // const onChangeInput = ({ target: { name, value } }) => {
    //     console.log(name, value);
    //     setFormData({ ...formData, [name]: value });
    //     console.log('formData', formData);
    // };

    const onSubmitAccept = (e) => {
        e.preventDefault();
        console.log('e.target', e.target)

        axios.put(`${API_URL}/api/events/applyingForm/${_id}`, { status: 1 })
            .then(data => {
                console.log("data", data)
                // history.push("./");

            })
    }

    const AllResponses = responses.map(response => {
        return !response.status == 1 && <OneCardAppliedResponse response={response} auth={props.auth} isLoggedIn={props.isLoggedIn} setSelectEvent={props.setSelectEvent} form={props.form} />
    })

    const AllAcceptedResponses = responses.map(response => {
        // console.log('response', response.status == 1)
        return response.status == 1 && <OneCardAppliedResponse response={response} auth={props.auth} isLoggedIn={props.isLoggedIn} setSelectEvent={props.setSelectEvent} form={props.form} />
    })



    return (
        <div>
            <MDBContainer>
                <br />
                <br />


                <MDBRow className="justify-content-center">

                    <MDBCard className="w-50">
                        <MDBCardTitle>
                            <br />
                            <h5><strong><center> {event.name}</center></strong></h5>
                            <hr />
                        </MDBCardTitle>

                        <MDBCardBody>
                            <h5>Description: <strong> {description} </strong></h5>
                            <br />
                            <h5>Requirement:<strong> {requirement} </strong></h5>
                            <br />
                            <h5>Shifts:<strong> {shifts[0]} , {shifts[1]} , {shifts[3]} </strong></h5>
                        </MDBCardBody>
                    </MDBCard>


                </MDBRow>
                <br />
                <br />
                <br />
                <MDBRow className="justify-content-md-center">
                    <h2><strong><center>Applied Organizers</center></strong></h2>
                </MDBRow>

                {AllResponses}
                <br />
                <br />
                <br />
                <br />

                <MDBRow className="justify-content-md-center">
                    <h2><strong><center>Accepted Organizers:</center></strong></h2>
                </MDBRow>
                {AllAcceptedResponses}

                <br />
                <br />
                <br />

            </MDBContainer>

        </div>

    )
}
