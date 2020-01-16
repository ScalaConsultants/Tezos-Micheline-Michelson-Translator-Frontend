import React from "react";
import "./Library.scss";
import LibraryList from "../../../components/admin/libraryList/LibraryList";

const Library = () => {
  return (
    <div className="admin-library">
      <h1>Library</h1>
      <div className="container_full">
        <div className="sub-container_login-form">
          <LibraryList />
        </div>
      </div>
    </div>
  );
};

export default Library;
