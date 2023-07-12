import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground modal-content">
      <div className="modalContainer bg-black">
        <h2 className="fw-bold">Name: {singleUser[0].name}</h2>
        <p>Email: {singleUser[0].email}</p>
        <p>Phone: {singleUser[0].number}</p>
        <p> Age: {singleUser[0].age}</p>
        <p>Gender: {singleUser[0].gender}</p>
        <button
          className=" btn shadow bg-warning text-black mb-3"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
