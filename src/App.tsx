import { TextField } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-material-ui";
import "react-phone-input-material-ui/lib/style.css";

import "./App.css";

function App() {
  const [phone, setPhone] = useState("");
  return (
    <div className="App" style={{paddingTop: 30, width: 300, paddingLeft: 30}}>
      <PhoneInput
        component={TextField}
        inputProps={{variant: 'filled'}}
        value={phone}
        onChange={(phone: string) => setPhone(phone)}
      />
    </div>
  );
}

export default App;
