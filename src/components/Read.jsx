import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="container-fluid ">
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2>All data</h2>
      <div className="inputs d-flex align-items-center justify-content-center gap-2">
        <input
          id="all"
          class="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={(e) => setRadioData("")}
        />
        <label htmlFor="all" class="form-check-label">
          All
        </label>
        <input
          id="male"
          class="form-check-input"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label htmlFor="male" class="form-check-label">
          Male
        </label>
        <input
          id="female"
          class="form-check-input"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label htmlFor="female" class="form-check-label">
          Female
        </label>
      </div>

      <div className="w-100">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((ele) => (
              <div
                key={ele.id}
                className="card w-100 my-3 shadow m-auto"
                style={{ maxWidth: "33rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">Name: {ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Email: {ele.email}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Phone: {ele.number}
                  </h6>
                  <p className="card-text">Gender: {ele.gender}</p>
                  <button
                    className="card-link btn btn-warning border shadow"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link
                    to={`/edit/${ele.id}`}
                    className="card-link btn btn-primary border shadow"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link btn btn-danger border shadow"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
