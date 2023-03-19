import BottomInput from "./BottomInput";
import TopProfile from "./TopProfile";
import { useState, useEffect } from "react";
import axios from "axios";

import Text from "./text";

export default function ChatBody(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    var message = {
      customTableName: props.tableName
    };
    console.log("sendeing", message);
    // post data
    axios
      .post("https://server5-7iue.onrender.com/getMessages", message)
      .then((res) => {
        setMessages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ChatBody" maxWidth="xs">
      {messages.map((mess) => {
        var myText = false;
        if (mess.sender == "me") {
          myText = true;
        } else {
          myText = false;
        }
        <Text message={mess.message} mine={myText} />;
      })}

      <Text message="message2" mine={false} />
    </div>
  );
}
