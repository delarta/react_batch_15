import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CardBody, Card, Container } from "reactstrap";

function CatFactApp() {
  const url = "https://catfact.ninja/fact";
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => setFact(response.data.fact));
  }, []);

  const handleGenerate = () => {
    axios.get(url).then((response) => setFact(response.data.fact));
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <h1 className="mb-5">{fact}</h1>

          <Button color="primary" onClick={() => handleGenerate()}>
            Generate Random Cat Facts
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default CatFactApp;
