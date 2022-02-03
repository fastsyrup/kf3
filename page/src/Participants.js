import "./App.css";
import useCookie from "react-use-cookie";

//import Row from "react-bootstrap/Row";

const Participants = ({
  participants,
  settings,
  setParticipants,
  deleteParticipant,
}) => {
  // console.log('Rendering Participants');
  // console.log(participants);
  // console.log(settings);
  const [userName, setUserName] = useCookie("Name", "");

  const Space = () => {
    return " ";
  };

  const DeleteLink = ({ name }) => {
    if (userName === name) {
      return (
        <span
          onClick={() => deleteParticipant(name)}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          [X]
        </span>
      );
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
                      <Space />
                      <DeleteLink name={entry} />
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
