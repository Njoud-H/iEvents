import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function UserProfile(props) {

    const history = useHistory();
    const [alluserEvents, setAluserEvents] = useState([])

    //call the data
    const { name, role, experience, events, pastEvents, appliedEvents, _id } = props.auth.currentUser;
    // console.log("props.auth.currentUser", props.auth.currentUser)

    console.log("editUser",props.editUser);
    const editProfile = () => {
        console.log("clickd")
        history.push(`./editProfile/${_id}`)
        console.log(_id)
    }

    const addEvent = () => {
        console.log("clickd")
        history.push(`./addEvent`)
        console.log(_id)
    }
    console.log("role", { role }, "!{role}=='organizer'", !{ role } == 'organizer')
    return (
        <>
            {/* name, role, experience, events, pastEvents, appliedEvents */}
            <h4> Name : {name} </h4>
            <br />
            <h4> role : {role} </h4>
            <br />


            {/* to delet */}
            <h4> events : {events} </h4>
            <br />
            <h4> pastEvents : {pastEvents} </h4>
            <br />
            <h4> experience : {experience} </h4>
            <br />
            <h4> appliedEvents : {appliedEvents} </h4>
            <br />

            {/* {!{ role } == 'organizer' ?
                <>
                    <h4> events : {events} </h4>
                    <br />
                </>
                :
                <>
                    <h4> pastEvents : {pastEvents} </h4>
                    <br />
                    <h4> experience : {experience} </h4>
                    <br />
                    <h4> appliedEvents : {appliedEvents} </h4>
                    <br />
                </>
            } */}


            <Link to={`/editProfile/${_id}`} >
                <Button onClick={() => editProfile()} className="outline-light" >
                    Edit Profile </Button></Link>


            <Link to={`/addEvent`} >
                <Button onClick={() => addEvent()} className="outline-light" >
                    Add Event </Button></Link>

        </>
    )
}
