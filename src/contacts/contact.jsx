import { Avatar, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Contact(props) {
  const dispatch = useDispatch();

  const openChat = () => {
    dispatch({ type: "PEER_REGISTER", peer: props.name });
    window.location.pathname = "/chat";
    // get the owner username and the contact username
    // open the chat view
    // get the name chatlistTable from myUserName
    // get all the message from the list
  };
  return (
    <div className="Contact">
      <Button className="ContactChild" onClick={openChat}>
        <Avatar
          alt="Remy Sharp"
          sx={{ bgcolor: "blue", width: 70, height: 70 }}
        ></Avatar>
        <div className="contText">
          <h3>{props.name}</h3>
          <p>{props.email}</p>
        </div>
      </Button>
      <Divider />
    </div>
  );
}
