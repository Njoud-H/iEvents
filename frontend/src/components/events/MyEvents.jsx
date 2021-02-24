import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
import API_URL from '../../utility/apiConfig'
import OneCardEvent from './OneCardEvent'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

export default function MyEvents(props) {
    const [MyEvent, setMyEvent] = useState([])
    const [Events, setEvents] = useState([])
    const [selectEvent, setSelectEvent] = useState(props.setSelectEvent)

    // /api/user
    useEffect(() => {
        axios.get(`${API_URL}/api/events`)
            .then(res => {
                console.log('res', res.data.msg)
                console.log('props.user._id',props.user._id);
                const MyEventArr = res.data.msg.filter(ele => ele.owner === props.user._id)
                setMyEvent(MyEventArr)
                console.log('MyEvent', MyEvent)
                setEvents(res.data.msg)
                setSelectEvent(res.data.msg)
            })
    }, [])

    // DELETE
    const deleteEvent = (id) => {
        axios.delete(`${API_URL}/api/events/deleteEvent/${id}`)
          .then(data => {
            console.log("data", data);
        const newArray = MyEvent.filter(e => e.id != data.id);
        setMyEvent(newArray);
/*              location.reload(); 
 */                  })
      }

    const AllMyEvent = MyEvent.map(event => {
        return <OneCardEvent auth={props.auth} event={event} deleteEvent={deleteEvent} setSelectEvent={props.setSelectEvent} isMyEvent={true} />
    })


    return (
        <>
          <br />
          <br />
            <h1 className="mt-10" style={{ textAlign: "center" }}>My Events</h1>

            <a href={`/addEvent`} className='black-text d-flex justify-content-center'>
            <h4 className="mt-10" style={{ textAlign: "center" }}><strong>+ </strong>New Event</h4>
              </a>

              <br />
          <br />

            <Container>
                <MDBRow className="justify-content-md-center">
                    <MDBCol>
                        {AllMyEvent}
                    </MDBCol>
                </MDBRow>
                <br />
          <br />
                    <br />
          <br />
          <br />
          <br />
          <br />  
           <br />
          <br />
          <br />
          <br />
            </Container>

        </>
    )
}
