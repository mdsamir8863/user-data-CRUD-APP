import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div>
      <nav className="navbar position-sticky shadow pb-0 mb-3 bg-dark">
          <ul className="navbar-brand container  d-flex align-items-center justify-content-evenly list-unstyled">
            <li  className="btn ps-0" >
              <Link to="/" className="nav-link btn border p-2 text-warning shadow">
                Create Post
              </Link>
            </li>
            <li className="btn">
              <Link to="/read" className="nav-link btn border p-2 text-warning shadow">
                All Post ({allusers.length})
              </Link>
            </li>
              <input
                className="form-control w-auto bg-dark border shadow text-warning"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />
          </ul>

         
      </nav>
    </div>
  );
};

export default Navbar;
