import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Contacts from "./contacts";
import MapViewer from "./mapViewer";
import AddContact from "./addContact";

export default function Contact(props) {
  const user = useSelector((state) => state.user);

  return (
    <div className="HomeView">
      <Grid container>
        <Grid item sm={6} md={6}>
          <Contacts username={user.userName} />
        </Grid>
        <Grid item sm={6} md={6}>
          <MapViewer location={user.location} />
        </Grid>
      </Grid>
      <AddContact enabled={true} />
    </div>
  );
}
