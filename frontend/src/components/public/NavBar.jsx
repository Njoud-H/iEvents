import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { MDBBtn, Link } from "mdbreact";
import { useHistory } from "react-router-dom";


export default function NavBar(props) {
  const history = useHistory();


  return (
    <div >
      <h1 className="text-center mt-4 mb-4 light-green-text font-weight-bold "></h1>
      <Nav className="justify-content-end deep-purple darken-1-text" activeKey="/home"></Nav>
      <Nav variant="tabs" defaultActiveKey="/home">



        {!props.auth.isLoggedIn ?
          /* Protected Route  */
          <>

            <Nav.Item>
              <MDBBtn outline color="deep-purple darken-1" className="black"
                onClick={() => {
                  history.push("/")
                }}> <strong>Home</strong>
              </MDBBtn>
            </Nav.Item>

            <Nav.Item>
              <MDBBtn outline color="deep-purple darken-1" className="black"
                onClick={() => {
                  history.push("/signup")
                }}> <strong>Sign-Up</strong>
              </MDBBtn>
            </Nav.Item>

            <Nav.Item>
              <MDBBtn outline color="deep-purple darken-1" className="black"
                onClick={() => {
                  history.push("/login")
                }}> <strong>Log-In</strong>
              </MDBBtn>
            </Nav.Item>


          </> : <>

            {props.auth.currentUser.role == "owner" ?
              <>
                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/OwnerProfile")
                    }}> <strong>Profile</strong>
                  </MDBBtn>
                </Nav.Item>

                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/MyEvents")
                    }}> <strong>MyEvents</strong>
                  </MDBBtn>
                </Nav.Item>

                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/allEvents")
                    }}> <strong>Events</strong>
                  </MDBBtn>
                </Nav.Item>

              </>

              :
              <>

                {/* Organizer */}
                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/OrganizerProfile")
                    }}> <strong>Profile</strong>
                  </MDBBtn>
                </Nav.Item>

                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/allEvents")
                    }}> <strong>Events</strong>
                  </MDBBtn>
                </Nav.Item>

                <Nav.Item>
                  <MDBBtn outline color="deep-purple darken-1" className="black"
                    onClick={() => {
                      history.push("/MyAppliedForm")
                    }}> <strong>My Applied Events</strong>
                  </MDBBtn>
                </Nav.Item>

              </>
              ///MyAppliedForm

            }

            <Nav.Item>
              <MDBBtn outline color="deep-purple darken-1" className="black"
                onClick={() => {
                  console.log("Logging Out!");
                  localStorage.removeItem("jwtToken");
                  props.loginCallback();
                  history.push("/")
                }}> <strong>LogOut</strong>
              </MDBBtn>
            </Nav.Item>
          </>
          /* For isLoggedIn */
        }

      </Nav>
    </div>
  )
}