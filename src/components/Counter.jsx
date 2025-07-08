import { Typography, Box, Button, TextField } from "@mui/material";
import "@fontsource/roboto/400.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

export const Counter = (props) => {
  return (
    <Box sx={{ width: "100%", mt: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom>
          <TimerOutlinedIcon color="primary" /> Simple Counter
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          color="primary">
          {props.seconds}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          color="success"
          sx={{ mx: "10px" }}
          onClick={props.start}
          variant="outlined"
        >
          Start
        </Button>
        <Button
          color="error"
          sx={{ mx: "10px" }}
          onClick={props.stop}
          variant="outlined"
        >
          Stop
        </Button>
        <Button 
          sx={{ mx: "10px" }} 
          onClick={props.reset} 
          variant="outlined">
          Reset
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          onBlur={props.input}
          id="input-countdown"
          label="Countdown"
          variant="standard"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField 
          id="input-alert" 
          label="Alert" 
          variant="standard" />
      </Box>
    </Box>
  );
};
