import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import emailjs , {init} from 'emailjs-com';
init("user_EFmzUAlGPmdaL9pMLktd4");

export default function Email() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_n9wt4e9', 'ContactUs_Email', e.target, 'user_EFmzUAlGPmdaL9pMLktd4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
/* To send the msg into the email */
e.target.reset()
  }

  return (
<MDBContainer>
<MDBRow className="justify-content-center"> 

        <MDBCol md="5">
        <br />
          <br />
        
          <MDBCard>
            <MDBCardBody>
            <form className="contact-form" onSubmit={sendEmail}>
                <p className="h4 text-center py-4">Write To Us</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your subject
                </label>
                <input
                name="subject"
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your name
                </label>
                <input
                 name="name"
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
            name="email"
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
<br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea name="message" type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          <br />
          <br />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      );
    };
