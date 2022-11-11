import { Typography, Box, useTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react"
import { tokens } from "theme";

const Dropdown = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState('notes_taken');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        //label="Age"
        onChange={handleChange}
      >
        <MenuItem value={'notes_taken'}>Notes taken</MenuItem>
        <MenuItem value={'log_ins'}>Log ins</MenuItem>
        <MenuItem value={'session_time'}>Session time</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
