import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { updateUserProfile } from "../../store/user-actions/userSlice";
import { useMatch } from "react-router-dom";

const Profile = () => {
  const match = useMatch("/dashboard/profile");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserProfile({ [name]: value }));
  };
  if (match) {
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Profile</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture URL</label>
            <input
              type="text"
              className="form-control"
              id="profilePicture"
              name="profilePicture"
              value={user.profilePicture}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
  return <p>No matching route found.</p>;
};

export default Profile;
