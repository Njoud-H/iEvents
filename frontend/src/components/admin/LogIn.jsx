import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API_URL from '../../utility/apiConfig'


export default function LogIn(props) {
    const history = useHistory();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [LoginError, setLoginError] = useState();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`${API_URL}/api/users/login`, credentials)
            .then((res) => {

                const token = res.data.token;
                const msg = res.data.msg;

                if (token) {
                    localStorage.setItem("jwtToken", token);
                    props.loginCallback();
                    history.push("/ControlPanel");
                } else {
                    console.log("Login error: ", msg);
                    setLoginError("Email or Passwoed are incurrect")
                }
            });
    };

    return (
        <>
            <h1>Admin Log In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(e) => onSubmit(e)}

                render={({ errors, status, touched }) => (

                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" onKeyUp={onChangeInput} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" onKeyUp={onChangeInput} className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={(e) => onSubmit(e)}
                            >
                                Submit
                      </Button>
                      <h3>{LoginError}</h3>
                        </div>
                    </Form>
                )}
            />
        </>
    );
}
