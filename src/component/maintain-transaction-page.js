import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import List from './list';
const server = 'https://javaidbhai-server.herokuapp.com/';

// import { AgGridReact } from 'ag-grid-react';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const rowDataClicked1 = {};

const AddEdit = () => {
  const [senderName, setsenderName] = useState('');
  const [recieverNAme, setrecieverNAme] = useState('');
  const [sendingDate, setsendingDate] = useState(new Date());
  const [receivingDate, setreceivingDate] = useState(new Date());
  const [amount, setamount] = useState(0);
  const [list, setList] = useState(null);
  const col = [
    { headerName: "Sender Name", field: "senderName" },
    { headerName: "Receiver Name", field: "receiverName" },
    { headerName: "Date Sent", field: "sendingDate" },
    { headerName: "Date Recieved", field: "transactionDate" },
    { headerName: "Amount", field: "amount", },
    { headerName: "Action", field: "", cellRenderer: "edit", colId: "edit" }
  ];

  useEffect(() => {
    Axios.get(server +'getAll').then(
      (res, error) => {
        console.log(res);
        setList(res.data);
      }
    )

    Axios.get(server + 'getById').then(
      (res, error) => {
        console.log(res);
        //setList(res.data);
      }
    )

  }, []);


  const addToList = () => {
    const data = {
      senderName: senderName,
      recieverNAme: recieverNAme,
      sendingDate: sendingDate,
      receivingDate: receivingDate,
      amount: amount
    };

    // let json = CircularJSON.stringify(data);
    console.log(data)
    Axios.post(server + "insert", data).then(res => {
      if (res.status === 200) {
        alert('Record has been added');
      }
    });
  };




  return (

    <div>
      <div className="card text-center text-white bg-info mb-3">
        <div className="card-body">
          <h1 className="mdc-top-app-bar">TRANSACTION MANAGER</h1>
        </div>
      </div>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-body">
          <div className="card-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label className="col-form-label">senderName</label>
                  <div className="col-auto">
                    <input type="senderName" className="form-control" id="senderName"
                      onChange={(date) => setsenderName(date.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="col-form-label">receiverName</label>
                  <div className="col-auto">
                    <input type="receiverName" className="form-control" id="receiverName" onChange={(date) => setrecieverNAme(date.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="col-form-label">amount</label>
                  <div className="col-auto">
                    <input type="number" className="form-control" id="amount" onChange={(data) => setamount(data.target.value)} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="col-form-label">sendingDate</label>
                  <div className="col-auto">
                    {/* <input type="sendingDate" className="form-control" id="sendingDate" /> */}
                    <DatePicker selected={sendingDate} onChange={(date) => setsendingDate(date.toISOString())} />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="col-form-label">receivingDate</label>
                  <div className="col-auto">
                    {/* <input type="receivingDate" className="form-control" id="receivingDate" /> */}
                    <DatePicker selected={receivingDate} onChange={(date) => setreceivingDate(date.toISOString())} />
                  </div>
                </div>


              </div>
              <br />

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-info text-white me-md-2" onClick={addToList} type="button">Save</button>

              </div>
            </div>

          </div>
        </div>
        <List list={list} row={list} col={col} />
      </div>

    </div>
  );
}
export default AddEdit;

