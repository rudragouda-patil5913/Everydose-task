import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const Lists = (props) => {
  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
            Edit <code>src/App.js</code> and save to reload.
          </CardHeader>
          <CardBody>
            <p>Your code goes here</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
