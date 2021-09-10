import React from "react";
import { PropTypes } from "prop-types";
import "../styles/Filter.css";
const Filter = ({sortName, sortAge}) => {
  return (
    <>
      <div id="control-box">
        <div id="control-name">
          <input
            type="radio"
            onChange={sortName}
            name="radio"
            data-testid="name"
          />{" "}
          <label htmlFor="name_check">Sort by name</label>
        </div>
        <div id="control-age">
          <input
            type="radio"
            onClick={sortAge}
            name="radio"
            data-testid="age"
          />{" "}
          <label htmlFor="age_check">Sort by age</label>
        </div>
      </div>
    </>
  );
};

Filter.propTypes = {
  sortName: PropTypes.func,
  sortAge: PropTypes.func,
};

export default Filter;
