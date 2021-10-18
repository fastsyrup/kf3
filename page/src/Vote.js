import './App.css';
import { Formik, Field, Form } from 'formik';
//import styled from "styled-components";
//import { Form, Button } from 'react-bootstrap';

const Vote = ({settings, addParticipant}) => {
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
                        Optionen
                        {settings.options && settings.options.map((item) => (
                            <div key={item}>
                                <label>
                                    <Field type="checkbox" name="options" value={item} />
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