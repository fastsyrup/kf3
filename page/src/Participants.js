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

      <h3>Optionen</h3>

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
