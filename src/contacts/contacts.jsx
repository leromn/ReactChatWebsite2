import Contact from "./contact";
import * as React from "react";
import axios from "axios";

export default function Contacts(props) {
  const [contacts, setContacts] = React.useState([{}]);

  const message = { myUserName: props.username };

  React.useEffect(() => {
    // code to execute on mount, update, or unmount
    axios
      .post("https://server5-7iue.onrender.com/getContacts", message)
      .then((response) => {
        console.log(response.data);
        setContacts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Contacts">
      {contacts.map((e) => {
        return <Contact name={e.userName} email={e._id} />;
      })}
    </div>
  );
}
