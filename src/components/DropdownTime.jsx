import { Typography, Box, useTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react"
import { tokens } from "theme";

const DropdownTime = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState('today');

  const handleChange = (event) => {
    setValue(event.target.value);
    // @Rayyan api call to get data from timeframe
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
        <MenuItem value={'today'}>Today</MenuItem>
        <MenuItem value={'this_week'}>This week</MenuItem>
        <MenuItem value={'this_month'}>This month</MenuItem>
        <MenuItem value={'this_quarter'}>This quarter</MenuItem>
        <MenuItem value={'all_time'}>All time</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropdownTime;
