import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function BottomInput(props) {
  const [inputMessage, setMessage] = useState("");

  const send = () => {
    var message = {
      sender: props.info.user.userName,
      reciever: props.info.pairedContact,
      message: inputMessage
    };
    console.log("sendeing", message);
    // post data
    axios
      .post("https://server5-7iue.onrender.com/sendMessage", message)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="BottomInput">
      <TextField
        placeholder="Text"
        className="textInput"
        name="message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <Button className="sendButton" onClick={send}>
        SEND
      </Button>
    </div>
  );
}
