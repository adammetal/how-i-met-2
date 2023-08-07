import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import LoadingMask from "./LoadingMask";

const url = "https://demoapi.com/api/series/newsletter";

const Subscription = ({ onSubscribed }) => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    if (value.includes("@") && value.includes(".")) {
      setValid(true);
    } else {
      setValid(false);
    }

    setEmail(value);
  };

  const handleSubscribe = async () => {
    setLoading(true);

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setLoading(false);
    setSubscribed(true);
    onSubscribed();
  };

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      {subscribed ? <Typography variant="h2">Subscribed</Typography> : null}
      {loading ? <LoadingMask /> : null}
      {!subscribed && !loading ? (
        <>
          <TextField
            label="Email address"
            variant="outlined"
            value={email}
            onChange={handleChange}
            type="email"
          />
          <Button variant="contained" disabled={!valid} onClick={handleSubscribe}>
            Subscribe
          </Button>
        </>
      ) : null}
    </Paper>
  );
};

export default Subscription;
