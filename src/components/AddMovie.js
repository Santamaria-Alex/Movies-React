import React from "react";

const AddMovie = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Movie</label>
        <input type="text" placeholder="Add Movie" />
      </div>
      <div className="form-control">
        <label htmlFor="">Director</label>
        <input type="text" placeholder="Add Director" />
      </div>
      <div className="form-control">
        <label htmlFor="">Release Date</label>
        <input type="text" placeholder="Add Release Date" />
      </div>
      <div className="form-control">
        <label htmlFor="">Plot</label>
        <input type="text" placeholder="Add Plot" />
      </div>
      <input type="submit" value="Save Movie" />
    </form>
  );
};

export default AddMovie;
