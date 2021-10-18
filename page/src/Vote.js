import './App.css';
import React, { useState, useEffect } from 'react';
//import styled from "styled-components";
import * as firebase from './firebase';
import { Formik, Field, Form } from 'formik';
//import { Form, Button } from 'react-bootstrap';

/* {
    "selected": "Nein",
    "Name": "asdf",
    "options": [
      "Grillen?"
    ]
  } */

const Vote = ({settings, addParticipant}) => {
    // console.log('settingsfields');
    // console.log(settings.fields);
    return (
        <div>
            <h3>Machst du mit?</h3>
            <Formik
                initialValues={{
                    selected: 'Ja',
                    Name: '',
                    options: ''
                }}
                onSubmit={async (values) => {
                    addParticipant(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        {settings.fields && settings.fields.map((item) => (
                            <div key={item}>
                                <label>
                                    <Field type="radio" name="selected" value={item} />
                                    {item}
                                </label>
                            </div>
                        ))} 

                        <label htmlFor="name">Name</label>
                        <Field
                            id="Name"
                            name="Name"
                            type="text"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div >
    );
};

export default Vote;