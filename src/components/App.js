import React from "react";
import MerchControl from "./MerchControl";
import Navbar from "./Navbar";
import Container from '@mui/material/Container';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
      <Navbar />
      <MerchControl />
    </Container>
    </React.Fragment>
  );
}

export default App;
