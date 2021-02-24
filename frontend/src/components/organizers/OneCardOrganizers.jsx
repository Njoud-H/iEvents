import React, { useState } from "react";
import { Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

export default function OneCardEvent(props) {

  const { id } = useParams()
  const [selectOrganizer, setSelectOrganizer] = useState(props.selectOrganizer)
  // const [owner, setOwner] = useState()
  const {
    role, email,name, phoneNumber, gender, age, language, experience, pastEvents, appliedEvent, _id } = props.organizer

  return (
    <MDBContainer>
      <br />
      <br />

      <MDBCol md='14'>
        <MDBRow className="justify-content-center">

          <MDBCard className="w-50">
            <br />

            <p className="h2 text-center mb-2">Organizer Details</p>
            <hr />

            <MDBCardBody>
              <h5><strong>Name: {name}</strong></h5>
              <h5><strong>Email: {email}</strong></h5>
              <h5><strong>Phone Number: {phoneNumber}</strong></h5>
              <h5><strong>Gender: {gender}</strong></h5>
              <h5><strong>Age: {age}</strong></h5>
              <h5><strong>Language: {language}</strong></h5>
              <h5><strong>Experience: {experience}</strong></h5>
              <h5><strong>Previous Experience: {pastEvents}</strong></h5>
            </MDBCardBody>
          </MDBCard>

        </MDBRow>
        <br />
        <MDBRow className="justify-content-center">

          <MDBBtn className="deep-purple darken-1" href="#">Accept</MDBBtn>
          <MDBBtn className="deep-purple darken-1" href="#">Reject</MDBBtn>
        </MDBRow>
      </MDBCol>
      <br />
      <br />
      <br />
    </MDBContainer>



    // <div>

    //     <Col md="4" sm="4" className="mt-3">
    //         <Card style={{ width: '18rem' }} className="property-card">
    //             {/* <Card.Img variant="top" src={picture} className="property-image" /> */}
    //             <Card.Body className="property-description">
    //                 <Card.Title>{name}</Card.Title>

    //                 <Link to={`/AllOrganizers/${props.organizer._id}`} onClick={() => props.setSelectOrganizer(props.organizer)}>
    //                     <div class="property-more-icons fas fa-chevron-right">read more</div>
    //                 </Link>

    //             </Card.Body>
    //         </Card>
    //     </Col>

    // </div>

  )
}
