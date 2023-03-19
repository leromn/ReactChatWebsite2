import { Avatar, Button } from "@mui/material";

export default function TopProfile(props) {
  return (
    <div className="TopProfile">
      <Button variant="contained" className="TopChild">
        <Avatar
          alt="Remy Sharp"
          sx={{ bgcolor: "blue", width: 70, height: 70 }}
        >
          BU
        </Avatar>
        <div className="pContText">
          <h3>{props.username}</h3>
        </div>
      </Button>
    </div>
  );
}
