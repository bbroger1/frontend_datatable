import React, { Component } from "react";
import DataTable from "./components/DataTable";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = ['id', 'name', 'email', 'address', 'created_at'];
    return (
      <div className="container-fluid mt-5" id="root">
        <DataTable columns={columns} />
      </div>
    );
  }
}