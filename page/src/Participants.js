import "./App.css";
//import Row from "react-bootstrap/Row";

const Participants = ({ participants, settings, setParticipants }) => {
  // console.log('Rendering Participants');
  // console.log(participants);
  // console.log(settings);

  const DelEntry = (item) => {
    return <a href="">asdf</a>;
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
                "max-width": "350px",
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

      <h3>Optionen</h3>
      <div className="row">
        {settings.options &&
          settings.options.map((item, index) => (
            <div
              key={index}
              className="col-md-4 card"
              style={{
                "max-width": "350px",
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
