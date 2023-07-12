import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className=" w-75 mx-auto my-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label htmlFor="number" class="form-label">
            Phone
          </label>
          <input
            id="number"
            type="number"
            name="number"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <input
            id="male"
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label htmlFor="male" class="form-check-label">
            Male
          </label>
        </div>
        <div class="mb-3">
          <input
            id="female"
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label htmlFor="female" class="form-check-label">
            Female
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
