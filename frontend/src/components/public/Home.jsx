import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCardTitle,
  MDBNavbarToggler,
  MDBCollapse,
  MDBCardText,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './ClassicFormPage.css';

export default function Home () {

    const [collapseID, setCollapseID] = useState('')

    return (
      <div id='classicformpage'>
          <div>
            <MDBNavbar
              dark
              expand='md'
              scrolling
              fixed='top'
              style={{ marginTop: '20px' }}
            >
              <MDBContainer>
                <MDBNavbarBrand>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                 />

               <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='/'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/login'>Log-In</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/signup'>Sign-Up</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                    
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </div>

        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          <MDBContainer
            style={{ height: '1000%', width: '400%', paddingTop: '10rem' }}
            className='mt-2  d-flex justify-content-center align-items-center'
          >

              <MDBAnimation
                type='fadeInUp'
                delay='.3s'
                className='white-text text-center text-md-center col-md-7 mt-xl-10 mb1'
              >
                <h1 className='h1-responsive font-weight-bold'>
                  iEvents!
                </h1>
                <h6 className='mb-1 text-md-center'>
                Join our community and get your Part-Time job in the Crowd Management field, where the Owners are adding their events to give you a chance to become a part of them.    
                            </h6>

                            <MDBContainer>
          <MDBRow className='py-3'>
            <MDBCol md='12' className='text-center'>
            <hr className='hr-light' />
            <br />
            <br />
            <br />
              <h4>
                <strong>Our Vision</strong>
              </h4>
              <h6 className='mb-1 text-md-center'>
              Create a database that includes all what part-time job seekers and event owners would like to have, taking into consideration the accuracy and privacy to ensure that the task of employment and job search meet the expectation of the job seekers and events owners.                            </h6>
              <br />
             
    <br />
    <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
              </MDBAnimation>

{/*
              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                   <MDBCard id='classic-card'>
Latest Events
                  </MDBCard>
                  
                </MDBAnimation>
              </MDBCol>
               */}
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
