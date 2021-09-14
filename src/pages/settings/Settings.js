import React from 'react';
import './settings.css';
import Sidebar from './../../components/sidebar/Sidebar';

const Settings = () => {
    return (
        <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Muneem" name="name" />
          <label>Email</label>
          <input type="email" placeholder="muneem@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;