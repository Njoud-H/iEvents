import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert, Container } from "react-bootstrap";
import Axios from "axios";
// import OneCardEvent from './OneCardEvent'
import API_URL from '../../utility/apiConfig'
import { MDBCol, MDBRow } from "mdbreact";
import OneCardAppliedoForm from './OneCardAppliedoForm'
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

                setForms(res.data.msg)
                setIsForms(true)
            })

    }, [])

    console.log('form.event._id',forms)
    const AllForms = forms.map(form => {
       return form.event._id == id && <OneCardAppliedoForm auth={props.auth} isLoggedIn={props.isLoggedIn} form={form} setSelectEvent={props.setSelectEvent} />
    })

    return (
        <div>
            <Container>
            <br />
          <br />
                <MDBRow className="justify-content-md-center">
                    <MDBCol>
                    {IsForms ? AllForms : <h4>There're no Forms yet.</h4>}
                    </MDBCol>
                </MDBRow>
                <br />
          <br />
          <br />
          <br />
            </Container>
        </div>
    )
}
