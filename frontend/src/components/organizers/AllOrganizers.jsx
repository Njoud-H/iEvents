import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert, Container } from "react-bootstrap";
import Axios from "axios";
import OneCardOrganizers from './OneCardOrganizers'
import API_URL from '../../utility/apiConfig'

export default function AllOrganizers(props) {

    const [organizers, setOrganizers] = useState([])
    const [areas, setAreas] = useState([])
    const [selectOrganizer, setSelectOrganizer] = useState([])

    // /api/user
    useEffect(() => {
        Axios.get(`${API_URL}/api/users`)
            .then(res => {
                console.log('res', res.data.msg)
                const organizersArr = res.data.msg.filter(ele => ele.role === 'organizer')
                setOrganizers(organizersArr)
                setSelectOrganizer(organizersArr)
            })
    }, [])

    const AllOrganizers = organizers.map(organizer => {
        return <OneCardOrganizers isLoggedIn={props.isLoggedIn} organizer={organizer} setSelectOrganizer={props.setSelectOrganizer} />
    })


    return (
        <>
            <Container>
                <Row className="justify-content-md-center" >
                    {AllOrganizers}
                </Row>
            </Container>
        </>
    )
}
