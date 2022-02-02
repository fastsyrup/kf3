import "./App.css";
import useCookie from "react-use-cookie";

//import Row from "react-bootstrap/Row";

const Participants = ({ participants, settings, setParticipants }) => {
  // console.log('Rendering Participants');
  // console.log(participants);
  // console.log(settings);
  const [userName, setUserName] = useCookie("Name", "");

  const DeleteIt = ({ name }) => {
    if (userName === name) {
      return "Yes";
    } else return "";
  };

  return (
    <div>
      <h3>Anmeldungen</h3>
      <div className="row">
        {settings.fields &&
          settings.fields.map((item, index) => (
            <div
              key={index}
              className="col-md-4 card"
              style={{
                maxWidth: "350px",
              }}
            >
              <div className="card-body">
                <h5>{item}</h5>
                {participants &&
                  participants[item] &&
                  participants[item].map((entry, index) => (
                    <li key={index}>
                      {entry}
                      <DeleteIt name={entry} />
                    </li>
                  ))}
              </div>
            </div>
          ))}
      </div>

      <h3>Optionen</h3>
      <div className="row">
        {settings.options &&
          settings.options.map((item, index) => (
            <div
              key={index}
              className="col-md-4 card"
              style={{
                maxWidth: "350px",
              }}
            >
              <div className="card-body">
                <h5>{item}</h5>
                {participants &&
                  participants[item] &&
                  participants[item].map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Participants;
