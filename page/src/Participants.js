import "./App.css";
//import Row from "react-bootstrap/Row";

const Participants = ({ participants, settings }) => {
  // console.log('Rendering Participants');
  // console.log(participants);
  // console.log(settings);
  return (
    <div>
      <h3>Anmeldungen</h3>

      {settings.fields &&
        settings.fields.map((item, index) => (
          <div key={index}>
            {item}
            {participants &&
              participants[item] &&
              participants[item].map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
          </div>
        ))}

      <h3>Optionszeugs</h3>

      {settings.options &&
        settings.options.map((item, index) => (
          <div key={index}>
            {item}
            {participants &&
              participants[item] &&
              participants[item].map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Participants;
