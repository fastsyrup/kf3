import "./App.css";
import { Formik, Field, Form } from "formik";
//import { Row, InputGroup, FormControl } from "react-bootstrap";
//import styled from "styled-components";

const Vote = ({ settings, addParticipant }) => {
  return (
    <div>
      <h3>Bist du am Mittwoch dabei?</h3>
      <Formik
        initialValues={{
          selected: "Ja",
          Name: "",
          options: "",
        }}
        onSubmit={async (values) => {
          if (values.Name) {
            addParticipant(values);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div className="form-check">
              {settings.fields &&
                settings.fields.map((item, index) => (
                  <div key={item}>
                    <Field
                      type="radio"
                      name="selected"
                      value={item}
                      className="form-check-input"
                      id={index}
                    />
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                  </div>
                ))}
            </div>
            Optionszeugs
            <div className="form-check">
              {settings.options &&
                settings.options.map((item) => (
                  <div key={item}>
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                    <Field
                      type="checkbox"
                      name={item}
                      value={item}
                      className="form-check-input"
                      id={item}
                    />
                  </div>
                ))}
            </div>
            <div className="row g-6 align-items-center">
              <div className="col-auto">
                <label htmlFor="Name" className="col-form-label">
                  Name
                </label>
              </div>
              <div className="col-6">
                <Field
                  id="Name"
                  name="Name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                <button type="Submit" className="btn btn-primary">
                  Speichern
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Vote;
