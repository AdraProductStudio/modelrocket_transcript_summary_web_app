import React, { useState } from "react";
import Images from 'Utils/Icons';
import Button from "react-bootstrap/Button";
import DataTable from "react-data-table-component";
import Modal from "react-bootstrap/Modal";

const Homepage = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModel = () => setModalShow(!modalShow);
  const [modalData, setModalData] = useState({});

  const [filterData, setFilterData] = useState("all");

  const columns = [
    {
      name: "S.No",
      selector: (row) => <p className="table-content">{row.id}</p>,
      width: "80px",
    },
    {
      name: "Type of Engagement",
      selector: (row) => <p className="table-content">{row.typeEngagement}</p>,
    },
    {
      name: "Time of Engagement",
      selector: (row) => <p className="table-content">{row.timeEngagement}</p>,
    },
    {
      name: "Is Qualified?",
      selector: (row) => <p className="table-content">{row.isQualified}</p>,
    },
    {
      name: "Service Name",
      selector: (row) => <p className="table-content">{row.serviceName}</p>,
    },
    {
      name: "Transcript Summary",
      selector: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          <p
            className="table-content"
            onClick={() => {
              setModalData(row);
              handleModel();
            }}
          >
            {Images.eyeIcon}
          </p>
          <p className="table-content">{row.transcriptSummary}</p>
        </div>
      ),
    },
    {
      name: "User Phone No",
      selector: (row) => <p className="table-content">{row.userPhoneNo}</p>,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        font: "Poppins !important",
        color: "#222",
        fontSize: "20px",
        fontWeight: 500,
        paddingLeft: "0px",
      },
    },
  };

  const data = [
    { id: 1, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "yes", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 2, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "no", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 3, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "yes", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 4, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "no", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 5, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "yes", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 6, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "no", serviceName: "service-name", transcriptSummary: "transcript-summary", userPhoneNo: "user-phone-no" },
    { id: 7, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "yes", serviceName: "service-name", transcriptSummary: "summary", userPhoneNo: "user-phone-no" },
    { id: 8, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "no", serviceName: "service-name", transcriptSummary: "transcript", userPhoneNo: "user-phone-no" },
    { id: 9, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "yes", serviceName: "service-name", transcriptSummary: "hello", userPhoneNo: "user-phone-no" },
    { id: 10, typeEngagement: "type-of-engagement", timeEngagement: "time-of-engagement", isQualified: "no", serviceName: "service-name", transcriptSummary: "trans", userPhoneNo: "user-phone-no" },
  ];


  const filteredData = data.filter((item) => {
    return (filterData === "all") || (filterData === "leads" && item.isQualified === "yes");
  });

  return (
    <>
      <div className="model-rocket-home d-flex flex-column">
        <div className="model-rocket-header d-flex justify-content-between align-items-center p-3 px-5 ">
          <div className="header-logo ">{Images.logoIcon}</div>
          <div className="header-button">
            <Button className="btn btn-dark btn-sm d-flex rounded p-2 px-4">
              <span>Logout</span>
            </Button>
          </div>
        </div>
        <div className="model-rocket-content d-flex flex-column justify-content-evenly align-items-center ">
          <div className="filter-button-container d-flex justify-content-sm-center justify-content-lg-end align-items-center">
            <div className="checkbox p-2 me-4 px-4">
              <input
                className="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => setFilterData("all")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="checkbox p-2 px-4">
              <input
                className="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={filterData === "leads"}
                onClick={() => setFilterData("leads")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Leads
              </label>
            </div>
          </div>

          <div className="body-table">
            <div className="table-container card p-3">
              <DataTable
                className="fs-4"
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
              />
            </div>
          </div>
        </div>
        <div className="model-rocket-footer d-flex justify-content-center align-items-center">
          <div className="">
            <p className="footer-text mb-0 ">Copyrights@Model rocket-2024</p>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={handleModel} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Transcript Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalData?.typeEngagement}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModel}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Homepage;
