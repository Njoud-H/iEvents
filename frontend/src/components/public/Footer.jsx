import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

export default function Footer() {
    return (
      <MDBFooter color=" deep-purple lighten-5" className="font-small bottom ">
      <div className="black-text footer-copyright text-center py-3">
        <MDBContainer fluid>

          <a href="#!" className="black-text tw-ic mr-3">
        <MDBIcon fab icon="twitter" size="1x"/>
      </a>
            
      <a href="#!" className="black-text ins-ic mr-3">
        <MDBIcon fab icon="instagram" size="1x"/>
      </a>
     
      <a href="/contactEmail" className="black-text email-ic mr-3">
        <MDBIcon icon="envelope" size="1x"/>
      </a>

      <a href="https://git.generalassemb.ly/Angels/Project4-iEvents" className="black-text email-ic mr-3">
        <MDBIcon fab icon="github-alt"  size="1x"/>
      </a>
      <MDBCol>
          <h5></h5>
      </MDBCol>
      <MDBCol>
      &copy; {new Date().getFullYear()} Copyright: <strong>iEvents Team </strong>
      </MDBCol>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}