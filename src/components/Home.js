import React from "react";
import { Link } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Item 1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Item 2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Item 3</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
            <Link to="/lists">
            <button className="btn btn-primary">Edit List</button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
