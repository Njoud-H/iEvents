import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert, Container } from "react-bootstrap";
import Axios from "axios";
// import OneCardEvent from './OneCardEvent'
import API_URL from '../../utility/apiConfig'
import { MDBCol, MDBRow } from "mdbreact";
import OneCardAppliedResponse from './OneCardAppliedResponse'
import { useHistory, useParams } from "react-router-dom";

export default function AppliedOrganizers(props) {

    const { id } = useParams()
    const [forms, setForms] = useState([])
    const [myForms, setMyForms] = useState([])
    const [IsForms, setIsForms] = useState(false)
    //"there'er not applier yet"
    // const [locations, setLocations] = useState([])
    // const [eventTypes, setEventTypes] = useState([])

    // const [searchValue, setSearchValue] = useState([])

    // /api/user
    useEffect(() => {
        Axios.get(`${API_URL}/api/events/AppliyingForm`)
            .then(res => {
                // console.log('res', res)
                setForms(res.data.msg)
                console.log('res.data', res.data);
                setIsForms(true)
                // const MyEventArr = res.data.msg.map(ele => console.log('ele',ele))


                // let location = res.data.msg.map(ele => ele.location) // add types base on the movies
                // location.unshift('All') // add the All select top of the selects 
                // setLocations(Array.from(new Set(location))) // to make the array uniqe and non duplicate the elements

                // let eventType = res.data.msg.map(ele => ele.eventType) // add types base on the movies
                // eventType.unshift('All') // add the All select top of the selects 
                // setEventTypes(Array.from(new Set(eventType))) // to make the array uniqe and non duplicate the elements

            })

    }, [])

    //form.event._id == id && 
    // const AllForms = forms.map(form => {
    //     return <OneCardAppliedResponse auth={props.auth} isLoggedIn={props.isLoggedIn} form={form} setSelectEvent={props.setSelectEvent} />
    // })
    const AllForms = forms.map(form => {
        return form.responses.map(response => {
        // console.log('response',response)
            return !response.status == 1 && <OneCardAppliedResponse response={response} auth={props.auth} isLoggedIn={props.isLoggedIn} setSelectEvent={props.setSelectEvent} form={form} />
        })
    })

    const AllAcceptedForms = forms.map(form => {
        return form.responses.map(response => {
        // console.log('response',response)
            return response.status == 1 && <OneCardAppliedResponse response={response} auth={props.auth} isLoggedIn={props.isLoggedIn} setSelectEvent={props.setSelectEvent} form={props.form} />
        })
    })

    
    // const AllResponses = responses.map(response => {
    //     return <OneCardAppliedResponse response={response} auth={props.auth} isLoggedIn={props.isLoggedIn} setSelectEvent={props.setSelectEvent} form={props.form} />
    // })

    return (
        <div>
            <Container>
                <MDBRow className="justify-content-md-center">
                    <h1>All Applied for Events</h1>
                    <MDBCol>
                        {AllForms}
                    </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-md-center">
                <h1>All Accepted Events</h1>
                    <MDBCol>
                        {AllAcceptedForms}
                    </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-md-center">
                <h1>All Rejacted Events</h1>
                    <MDBCol>
                        {AllAcceptedForms}
                    </MDBCol>
                </MDBRow>
            </Container>
        </div>
    )
}
