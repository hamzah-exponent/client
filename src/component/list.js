// import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { Link } from "react-router-dom";
import { FaEye, FaPlusCircle } from "react-icons/fa";
import Button  from '@material-ui/core/Button';
import './list.css';

const List = ({ list, props, row, col }) => {
  var count = 0;
  // const [list, setList] = useState(null);
  // useEffect(() => {
  //   Axios.get('http://localhost:3001/read').then(
  //     (res, error) => {
  //       console.log(res);
  //       setList(res.data);
  //     }
  //   )

  // }, []);
  function editHandler(params) {
    console.log(params.colDef.cellRenderer, 'hamza');
    console.log('params', params);
    switch (params.colDef.cellRenderer) {
      case 'edit':

        return (link(params));
      default:
        return (<p>NA</p>);
    }
  }
  function link(params) {

    return (<Link
      to={{
        pathname: "/",
        // prop: { 'reservationId': rid },
      }}
    >
          <div>
      <Button color="primary" variant="contained">
        Click Me
      </Button>
    </div>
    </Link>);
  }


  return (
    <div className="d-flex justify-content-between">
      <div className="ag-theme-alpine-dark" style={{ "height": "400px", "width": "100%" }}>
        <AgGridReact
          rowData={row}
          columnDefs={col}
          frameworkComponents={{
            edit: editHandler,
          }}
        ></AgGridReact>
      </div>
    </div>

  );
  // return (<table className="table table-striped">

  //   <thead>
  //     <tr>
  //       <th>Sender Name</th>
  //       <th>Receiver Name</th>
  //       <th>Date Sent</th>
  //       <th>Date Recieved</th>
  //       <th>Amount</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {list && list.map((favFPL, i) => {
  //       return (
  //         <tr key={favFPL._id}>
  //           <td>{favFPL.senderName}</td>
  //           <td>{favFPL.receiverName}</td>
  //           <td>{favFPL.sendingDate}</td>
  //           <td>{favFPL.transactionDate}</td>
  //           <td>{favFPL.amount}</td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
  // )

};

export default List;