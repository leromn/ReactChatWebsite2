import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ContactForm(props) {
  const [statusText, setText] = useState("");
  const [recieverUN, setReciever] = useState("");
  const user = useSelector((state) => state.user);

  const addContact = (event) => {
    var message = { myUserName: user.userName, reciever: recieverUN };
    console.log("sendeing", message);
    // post data
    axios
      .post("https://server5-7iue.onrender.com/addContact", message)
      .then((res) => {
        setText("user added");
      })
      .catch((err) => {
        if (err.response.data.problem == "invalidUserName") {
          setText("*no user with the given name");
        } else if (err.response.data.problem == "contactExists") {
          setText("*contact exists");
        }
      });
    //if ok
    //if error
  };

  if (props.enabled) {
    return (
      <div className="ContactForm">
        <Typography variant="h6">Input UserName</Typography>
        <TextField
          label="UserName"
          variant="outlined"
          onChange={(event) => {
            setReciever(event.target.value);
            setText("");
          }}
        />
        <Typography variant="p" style={{ display: "Block", color: "orange" }}>
          {statusText}
        </Typography>
        <Button onClick={addContact}>add</Button>
        <Button onClick={props.toggleForm}>cancel</Button>
      </div>
    );
  } else {
    return <div>place holder</div>;
  }
}
