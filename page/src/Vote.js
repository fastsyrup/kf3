import "./App.css";
import { Formik, Field, Form } from "formik";
import useCookie from "react-use-cookie";
//import { Row, InputGroup, FormControl } from "react-bootstrap";
//import styled from "styled-components";

const Vote = ({ settings, addParticipant, participationData }) => {
  const [userName, setUserName] = useCookie("Name", "");
  return (
    <div>
      <h5>Bist du am Mittwoch dabei?</h5>
      <Formik
        initialValues={{
          selected: "Ja",
          Name: "",
          options: "",
        }}
        onSubmit={async (values, actions) => {
          if (values.Name) {
            addParticipant(values, participationData);
            setUserName(values.Name);
            actions.resetForm();
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
            <div className="d-inline-flex justify-content-start flex-wrap">
              <div className="">
                <Field
                  id="Name"
                  name="Name"
                  type="text"
                  className="form-control"
                  placeholder="Dein Name hombre"
                  style={{
                    width: 200,
                    marginRight: "20px",
                    marginBottom: "15px",
                  }}
                />
              </div>

              <button
                type="Submit"
                className="btn btn-primary"
                style={{
                  height: "40px",
                }}
              >
                Speichern
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Vote;
