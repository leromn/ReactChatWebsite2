import { Button, Typography } from "@mui/material";

export default function Text(props) {
  const flag = props.mine;
  const message = props.message;
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: flag ? "end" : "start",
        // border:'solid black',
        minWidth: "99vw",
        bottom: 0,
        left: 0
      }}
    >
      <Button variant="outlined">
        <Typography variant="h5">{message}</Typography>
      </Button>
    </div>
  );
}
