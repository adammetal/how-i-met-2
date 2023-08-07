import { Typography, Button } from "@mui/material";
import { useState } from "react"

const Character = ({ name, details }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      {show ? <Typography variant="p">{details}</Typography> : null}
      <Button variant="contained" onClick={toggle}>
        {show ? 'hide' : 'show'}
      </Button>
    </div>
  )
}

export default Character;
