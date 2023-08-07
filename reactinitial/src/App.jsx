import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const url = "https://demoapi.com/api/series/howimetyourmother";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  const [subShow, setSubShow] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const characters = await response.json();
      setCharacters(characters);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSubShow(true);
    }, 10000);
  }, []); 

  const handleSubscribed = () => {
    setTimeout(() => {
      setSubShow(false);
    }, 5000);
  }

  return (
    <div>
      <Typography variant="h1">Series Api</Typography>
      {loading ? (
        <LoadingMask />
      ) : (
        characters.map((c) => (
          <Character key={c.name} name={c.name} details={c.details} />
        ))
      )}
      {subShow ? <Subscription onSubscribed={handleSubscribed}/> : null}
    </div>
  );
};

export default App;
