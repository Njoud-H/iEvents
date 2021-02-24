import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../ClassicFormPage.css';


export default function EventDetails() {
    return (
        <MDBContainer>
        <br />
        <br />
        <MDBRow className="justify-content-center"> 
            <MDBCol md="7">
              <form>
              <p className="h2 text-center mb-2">Event Details</p>

                <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3" >
                <label htmlFor="defaultFormNameEx" className="black-text">
                  Event name
                </label>
                <input type="name" id="defaultFormNameEx" className="form-control" />
                </div>
        
                <div className="w-100 p-3">
                <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                  Location
                </label>
                <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                </div>
                </div>

                <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3" >
                <label htmlFor="defaultFormNameEx" className="black-text">
                 Date
                </label>
                <input type="name" id="defaultFormNameEx" className="form-control" />
                </div>
        
                <div className="w-100 p-3">
                <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                Description
                </label>
                <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                </div>
                </div>

                <div className="d-flex flex-nowrap example-parent">
                <div className="w-100 p-3" >
                <label htmlFor="defaultFormNameEx" className="black-text">
                 Duration
                </label>
                <input type="name" id="defaultFormNameEx" className="form-control" />
                </div>
        
                <div className="w-100 p-3">
                <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                Shifts
                </label>
                <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                </div>
                </div>

                <div className="d-flex flex-nowrap example-parent">
                <div className="w-50 p-3" >
                <label htmlFor="defaultFormNameEx" className="black-text">
                 Type
                </label>
                <input type="name" id="defaultFormNameEx" className="form-control" />
                </div>
        
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="deep-purple darken-1" type="submit">Submit</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <br />
        </MDBContainer>
        );
    };