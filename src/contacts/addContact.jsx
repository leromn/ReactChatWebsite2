import { Avatar, Button } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useState } from "react";
import ContactForm from "./contactForm";

export default function AddContact() {
  const [formEnabled, setEnabled] = useState(false);

  const toggleForm = () => {
    if (formEnabled == true) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  };
  return (
    <div className="addContactParent">
      <div className="AddContact">
        <Button className="ContactChild" onClick={toggleForm}>
          <Avatar
            alt="Remy Sharp"
            sx={{ bgcolor: "blue", width: 70, height: 70 }}
          >
            <AddIcCallIcon />
          </Avatar>
        </Button>
      </div>
      <ContactForm enabled={formEnabled} toggleForm={toggleForm} />
    </div>
  );
}
