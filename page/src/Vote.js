import "./App.css";
import { Formik, Field, Form } from "formik";
//import { Row, InputGroup, FormControl } from "react-bootstrap";
//import styled from "styled-components";

const Vote = ({ settings, addParticipant }) => {
  return (
    <div>
      <h5>Bist du am Mittwoch dabei?</h5>
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
            <div className="row">
              <div className="col-12 btns">
                {settings.fields &&
                  settings.fields.map((item, index) => (
                    <div key={item}>
                      <Field
                        type="radio"
                        name="selected"
                        value={item}
                        className="form-check-input"
                        id={item}
                      />
                      <label className="form-check-label" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="row">
              <div className="col-12">Optionale Aktivitäten</div>
            </div>
            <div className="row">
              <div className="col-12 btns">
                {settings.options &&
                  settings.options.map((item) => (
                    <div key={item}>
                      <Field
                        type="checkbox"
                        name="options"
                        value={item}
                        className="form-check-input"
                        id={item}
                      />
                      <label className="form-check-label" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-4">
                <Field
                  id="Name"
                  name="Name"
                  type="text"
                  className="form-control"
                  placeholder="Dein Name hombre"
                />
              </div>
              <div className="col-4">
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
