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

const Vote = (props) => {
    const [voteDataOptions, setVoteDataOptions] = useState();
    const [voteDataFields, setVoteDataFields] = useState();

    useEffect(() => {
        (async () => {
            const dataShell = await firebase.getVotesList();
            const data = dataShell.data();
            //console.log(data.fields);
            setVoteDataFields(data.fields);
            setVoteDataOptions(data.options);
        })()
    }, []);

    return (
        <div>
            <h3>Machst du mit?</h3>
            <Formik
                initialValues={{
                    selected: '',
                    Name: '',
                    options: ''
                }}
                onSubmit={async (values) => {
                    //await new Promise((r) => setTimeout(r, 500));
                    await firebase.addParticipant(values)
                    // console.log(res);
                    // console.log(JSON.stringify(values, null, 2));

                }}
            >
                {({ values }) => (
                    <Form>
                        <div role="group" aria-labelledby="my-radio-group">
                            {voteDataFields && voteDataFields.map((item) => (
                                <div>
                                    <label>
                                        <Field type="radio" name="selected" value={item} />
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                        Möchtest du
                        <div role="group" aria-labelledby="my-radio-group">
                            {voteDataOptions && voteDataOptions.map((item) => (
                                <div >
                                    <label>
                                        <Field type="checkbox" name="options" value={item} />
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>

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